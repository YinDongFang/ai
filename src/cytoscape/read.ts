import { fromPairs, keyBy } from 'lodash';

interface DatabaseGraphData {
  nodes?: any[];
  groups?: any[];
  relationships?: any[];
  tempStyle?: any;
}

export function read(data: DatabaseGraphData) {
  const { nodes = [], groups = [], relationships = [], tempStyle: styles } = data;
  const tempStyle = styles || {};
  const groupMap = keyBy(groups, 'uid');
  const groupOfNodes: any = fromPairs(
    groups.flatMap((group) => {
      const children = group.uids.map((id) => [id, group]);
      const parent = group.parentUid;
      if (parent) return [...children, [group.uid, groupMap[parent]]];
      else return children;
    }),
  );
  const groupDatas = groups.map((group) => {
    const { x, y, uid, parentUid, collapsed, displayName, ...restData } = group;
    const removed = groupOfNodes[uid]?.collapsed;
    return {
      data: {
        ...restData,
        id: uid,
        title: displayName,
        parent: parentUid,
        tempStyle: tempStyle[uid],
        removed,
      },
      position: { x: parseFloat(x), y: parseFloat(y) },
      classes: collapsed ? ['cy-expand-collapse-collapsed-node'] : undefined,
    };
  });
  const nodeDatas = nodes.map((node) => {
    const { x, y, uid, remark, temporary, dgraphType, displayName, properties, data } = node;
    const parent = groupOfNodes[uid];
    const removed = groupOfNodes[uid]?.collapsed;
    const position = { x: parseFloat(x || 0), y: parseFloat(y || 0) };
    return {
      data: {
        ...data,
        id: temporary ? remark : uid,
        parent: groupOfNodes[uid]?.uid,
        removed,
        temporary: temporary,
        tempStyle: tempStyle[temporary ? remark : uid],
        types: dgraphType,
        title: displayName,
      },
      position,
      scratch: { properties, dgraphType: dgraphType },
    };
  });
  const edgeDatas = relationships.map((relationship: any) => {
    const {
      sourceNode: source,
      targetNode: target,
      name,
      displayName,
      temporary,
      color,
      arrow,
      properties,
      data,
    } = relationship;
    const topMost = (uid) => {
      const group = groupOfNodes[uid];
      if (group?.collapsed) return topMost(group.uid);
      else return uid;
    };
    const renderSource = topMost(source);
    const renderTarget = topMost(target);
    const originalEnds =
      renderSource !== source || renderTarget !== target ? { source, target } : undefined;
    const classes: string[] = [];
    if (originalEnds) classes.push('cy-expand-collapse-meta-edge');
    return {
      data: {
        ...data,
        originalEnds,
        title: displayName,
        id: `${source}-${name}-${target}`,
        source: renderSource,
        target: renderTarget,
        removed: renderSource === renderTarget && originalEnds,
        parentNode: renderSource === renderTarget && originalEnds ? renderTarget : undefined,
        predicate: name,
        color: temporary ? null : color,
        tempStyle: tempStyle[`${source}-${name}-${target}`],
        arrow,
        temporary,
      },
      scratch: { properties },
      classes,
    };
  });
  return [...nodeDatas, ...groupDatas, ...edgeDatas];
}
