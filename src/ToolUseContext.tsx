import { createContext, useContext } from "react";

export const ToolUseContext = createContext<any>(null);

export const mock = {
  nodes: [
    {
      uid: "0x15b874f6",
      x: null,
      y: null,
      icon: "box-full",
      color: "rgba(173,66,14,1)",
      displayName: "物料280",
      dgraphType: ["MST_Item"],
      properties: [
        {
          "MST_Item.version": "v5.0",
        },
        {
          "MST_Item.lastest_version": "v3.0",
        },
        {
          "MST_Item.last_updated_time": "2023-12-09T00:00:00Z",
        },
        {
          "MST_Item.restricted_state": "state0",
        },
        {
          "MST_Item.status": "active",
        },
        {
          "MST_Item.name": "物料280",
        },
        {
          "MST_Item.source": "采购",
        },
        {
          "MST_Item.lifecycle_state": "已上线",
        },
        {
          "MST_Item.category_code": "CAT4",
        },
        {
          "MST_Item.product": "产品0",
        },
        {
          "MST_Item.modifier": "修改人280",
        },
        {
          "MST_Item.code": "ITEM00280",
        },
        {
          "MST_Item.process_name": "流程280",
        },
        {
          "MST_Item.modify_time": "2021-10-25T00:00:00Z",
        },
        {
          "MST_Item.creator": "创建人280",
        },
        {
          "MST_Item.createtime": "2023-06-18T00:00:00Z",
        },
        {
          "MST_Item.state": "in-use",
        },
        {
          "MST_Item.template": "模板0",
        },
        {
          "MST_Item.product_line": "线0",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x15b567c9",
      x: null,
      y: null,
      icon: "clipboard-list-check",
      color: "rgba(204,6,177,1)",
      displayName: "项目92",
      dgraphType: ["MST_Project"],
      properties: [
        {
          "MST_Project.classificationl1": "一级分类",
        },
        {
          "MST_Project.classificationl2": "二级分类",
        },
        {
          "MST_Project.status": "进行中",
        },
        {
          "MST_Project.team": "团队2",
        },
        {
          "MST_Project.classificationl3": "三级分类",
        },
        {
          "MST_Project.name": "项目92",
        },
        {
          "MST_Project.classification": "重点",
        },
        {
          "MST_Project.background": "背景说明92",
        },
        {
          "MST_Project.project_no": "PRJ0092",
        },
        {
          "MST_Project.end_date": "2025-10-23T00:00:00Z",
        },
        {
          "MST_Project.start_date": "2021-09-26T00:00:00Z",
        },
        {
          "MST_Project.kind": "类型0",
        },
        {
          "MST_Project.risk": "低",
        },
        {
          "MST_Project.type_name": "物料采购",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x15b874f7",
      x: null,
      y: null,
      icon: "comment-alt",
      color: "rgba(189,189,21,1)",
      displayName: "事件9",
      dgraphType: ["MST_Event"],
      properties: [
        {
          "MST_Event.classification": "异常",
        },
        {
          "MST_Event.abnormal_behavior_or_result": "异常行为描述9",
        },
        {
          "MST_Event.value5": "value5_9",
        },
        {
          "MST_Event.url_address": "http://event9.com",
        },
        {
          "MST_Event.value4": "value4_9",
        },
        {
          "MST_Event.key1": "key1_9",
        },
        {
          "MST_Event.value3": "value3_9",
        },
        {
          "MST_Event.key2": "key2_9",
        },
        {
          "MST_Event.key4": "key4_9",
        },
        {
          "MST_Event.type_l2": "延迟",
        },
        {
          "MST_Event.key3": "key3_9",
        },
        {
          "MST_Event.event_date": "2022-04-13T00:00:00Z",
        },
        {
          "MST_Event.value1": "value1_9",
        },
        {
          "MST_Event.name": "事件9",
        },
        {
          "MST_Event.value2": "value2_9",
        },
        {
          "MST_Event.is_key_event": "否",
        },
        {
          "MST_Event.event_object": "物料事件9",
        },
        {
          "MST_Event.key5": "key5_9",
        },
        {
          "MST_Event.url_name": "详情页9",
        },
        {
          "MST_Event.event_key": "EVT0009",
        },
        {
          "MST_Event.type_l1": "采购",
        },
        {
          "MST_Event.description": "交付延期9",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x15be8f7f",
      x: null,
      y: null,
      icon: "comment-alt",
      color: "rgba(189,189,21,1)",
      displayName: "事件143",
      dgraphType: ["MST_Event"],
      properties: [
        {
          "MST_Event.value3": "value3_143",
        },
        {
          "MST_Event.url_address": "http://event143.com",
        },
        {
          "MST_Event.name": "事件143",
        },
        {
          "MST_Event.classification": "异常",
        },
        {
          "MST_Event.description": "交付延期143",
        },
        {
          "MST_Event.key2": "key2_143",
        },
        {
          "MST_Event.type_l2": "延迟",
        },
        {
          "MST_Event.key4": "key4_143",
        },
        {
          "MST_Event.event_date": "2024-10-25T00:00:00Z",
        },
        {
          "MST_Event.value1": "value1_143",
        },
        {
          "MST_Event.is_key_event": "否",
        },
        {
          "MST_Event.value5": "value5_143",
        },
        {
          "MST_Event.value2": "value2_143",
        },
        {
          "MST_Event.event_object": "物料事件143",
        },
        {
          "MST_Event.url_name": "详情页143",
        },
        {
          "MST_Event.abnormal_behavior_or_result": "异常行为描述143",
        },
        {
          "MST_Event.key3": "key3_143",
        },
        {
          "MST_Event.event_key": "EVT0143",
        },
        {
          "MST_Event.key5": "key5_143",
        },
        {
          "MST_Event.type_l1": "采购",
        },
        {
          "MST_Event.value4": "value4_143",
        },
        {
          "MST_Event.key1": "key1_143",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x15b9fb95",
      x: null,
      y: null,
      icon: "comment-alt",
      color: "rgba(189,189,21,1)",
      displayName: "事件58",
      dgraphType: ["MST_Event"],
      properties: [
        {
          "MST_Event.name": "事件58",
        },
        {
          "MST_Event.key4": "key4_58",
        },
        {
          "MST_Event.key5": "key5_58",
        },
        {
          "MST_Event.key2": "key2_58",
        },
        {
          "MST_Event.key3": "key3_58",
        },
        {
          "MST_Event.classification": "异常",
        },
        {
          "MST_Event.value3": "value3_58",
        },
        {
          "MST_Event.value2": "value2_58",
        },
        {
          "MST_Event.value1": "value1_58",
        },
        {
          "MST_Event.type_l2": "延迟",
        },
        {
          "MST_Event.description": "交付延期58",
        },
        {
          "MST_Event.is_key_event": "否",
        },
        {
          "MST_Event.url_address": "http://event58.com",
        },
        {
          "MST_Event.event_key": "EVT0058",
        },
        {
          "MST_Event.key1": "key1_58",
        },
        {
          "MST_Event.value4": "value4_58",
        },
        {
          "MST_Event.value5": "value5_58",
        },
        {
          "MST_Event.event_object": "物料事件58",
        },
        {
          "MST_Event.event_date": "2022-06-04T00:00:00Z",
        },
        {
          "MST_Event.type_l1": "采购",
        },
        {
          "MST_Event.abnormal_behavior_or_result": "异常行为描述58",
        },
        {
          "MST_Event.url_name": "详情页58",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x15a62574",
      x: null,
      y: null,
      icon: "box-full",
      color: "rgba(173,66,14,1)",
      displayName: "物料266",
      dgraphType: ["MST_Item"],
      properties: [
        {
          "MST_Item.creator": "创建人266",
        },
        {
          "MST_Item.last_updated_time": "2022-08-31T00:00:00Z",
        },
        {
          "MST_Item.status": "active",
        },
        {
          "MST_Item.modifier": "修改人266",
        },
        {
          "MST_Item.modify_time": "2021-07-22T00:00:00Z",
        },
        {
          "MST_Item.source": "采购",
        },
        {
          "MST_Item.lifecycle_state": "已上线",
        },
        {
          "MST_Item.category_code": "CAT2",
        },
        {
          "MST_Item.name": "物料266",
        },
        {
          "MST_Item.createtime": "2022-02-23T00:00:00Z",
        },
        {
          "MST_Item.restricted_state": "state2",
        },
        {
          "MST_Item.code": "ITEM00266",
        },
        {
          "MST_Item.product": "产品6",
        },
        {
          "MST_Item.process_name": "流程266",
        },
        {
          "MST_Item.template": "模板2",
        },
        {
          "MST_Item.lastest_version": "v6.0",
        },
        {
          "MST_Item.product_line": "线1",
        },
        {
          "MST_Item.state": "in-use",
        },
        {
          "MST_Item.version": "v3.0",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x15aab94e",
      x: null,
      y: null,
      icon: "box-full",
      color: "rgba(173,66,14,1)",
      displayName: "物料254",
      dgraphType: ["MST_Item"],
      properties: [
        {
          "MST_Item.modify_time": "2023-05-14T00:00:00Z",
        },
        {
          "MST_Item.creator": "创建人254",
        },
        {
          "MST_Item.last_updated_time": "2021-09-12T00:00:00Z",
        },
        {
          "MST_Item.version": "v8.0",
        },
        {
          "MST_Item.modifier": "修改人254",
        },
        {
          "MST_Item.status": "active",
        },
        {
          "MST_Item.source": "采购",
        },
        {
          "MST_Item.lifecycle_state": "已上线",
        },
        {
          "MST_Item.name": "物料254",
        },
        {
          "MST_Item.category_code": "CAT2",
        },
        {
          "MST_Item.process_name": "流程254",
        },
        {
          "MST_Item.code": "ITEM00254",
        },
        {
          "MST_Item.restricted_state": "state2",
        },
        {
          "MST_Item.createtime": "2024-07-31T00:00:00Z",
        },
        {
          "MST_Item.product_line": "线4",
        },
        {
          "MST_Item.template": "模板2",
        },
        {
          "MST_Item.lastest_version": "v6.0",
        },
        {
          "MST_Item.product": "产品4",
        },
        {
          "MST_Item.state": "in-use",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x15a00aec",
      x: null,
      y: null,
      icon: "box-full",
      color: "rgba(173,66,14,1)",
      displayName: "物料41",
      dgraphType: ["MST_Item"],
      properties: [
        {
          "MST_Item.version": "v5.0",
        },
        {
          "MST_Item.status": "active",
        },
        {
          "MST_Item.lastest_version": "v10.0",
        },
        {
          "MST_Item.createtime": "2025-10-26T00:00:00Z",
        },
        {
          "MST_Item.last_updated_time": "2025-08-26T00:00:00Z",
        },
        {
          "MST_Item.name": "物料41",
        },
        {
          "MST_Item.modifier": "修改人41",
        },
        {
          "MST_Item.source": "采购",
        },
        {
          "MST_Item.lifecycle_state": "已上线",
        },
        {
          "MST_Item.process_name": "流程41",
        },
        {
          "MST_Item.category_code": "CAT5",
        },
        {
          "MST_Item.product": "产品1",
        },
        {
          "MST_Item.restricted_state": "state1",
        },
        {
          "MST_Item.modify_time": "2022-05-12T00:00:00Z",
        },
        {
          "MST_Item.code": "ITEM00041",
        },
        {
          "MST_Item.template": "模板1",
        },
        {
          "MST_Item.product_line": "线1",
        },
        {
          "MST_Item.state": "in-use",
        },
        {
          "MST_Item.creator": "创建人41",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x15924f5b",
      x: null,
      y: null,
      icon: "comment-alt",
      color: "rgba(189,189,21,1)",
      displayName: "事件141",
      dgraphType: ["MST_Event"],
      properties: [
        {
          "MST_Event.value3": "value3_141",
        },
        {
          "MST_Event.key2": "key2_141",
        },
        {
          "MST_Event.description": "交付延期141",
        },
        {
          "MST_Event.classification": "异常",
        },
        {
          "MST_Event.event_date": "2024-09-09T00:00:00Z",
        },
        {
          "MST_Event.name": "事件141",
        },
        {
          "MST_Event.value5": "value5_141",
        },
        {
          "MST_Event.key4": "key4_141",
        },
        {
          "MST_Event.type_l2": "延迟",
        },
        {
          "MST_Event.url_address": "http://event141.com",
        },
        {
          "MST_Event.is_key_event": "否",
        },
        {
          "MST_Event.value1": "value1_141",
        },
        {
          "MST_Event.value2": "value2_141",
        },
        {
          "MST_Event.key3": "key3_141",
        },
        {
          "MST_Event.event_object": "物料事件141",
        },
        {
          "MST_Event.url_name": "详情页141",
        },
        {
          "MST_Event.abnormal_behavior_or_result": "异常行为描述141",
        },
        {
          "MST_Event.event_key": "EVT0141",
        },
        {
          "MST_Event.value4": "value4_141",
        },
        {
          "MST_Event.key5": "key5_141",
        },
        {
          "MST_Event.type_l1": "采购",
        },
        {
          "MST_Event.key1": "key1_141",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x15bd08cd",
      x: null,
      y: null,
      icon: "box-full",
      color: "rgba(173,66,14,1)",
      displayName: "物料199",
      dgraphType: ["MST_Item"],
      properties: [
        {
          "MST_Item.last_updated_time": "2022-04-20T00:00:00Z",
        },
        {
          "MST_Item.createtime": "2022-06-09T00:00:00Z",
        },
        {
          "MST_Item.creator": "创建人199",
        },
        {
          "MST_Item.version": "v8.0",
        },
        {
          "MST_Item.modifier": "修改人199",
        },
        {
          "MST_Item.status": "active",
        },
        {
          "MST_Item.source": "采购",
        },
        {
          "MST_Item.lifecycle_state": "已上线",
        },
        {
          "MST_Item.name": "物料199",
        },
        {
          "MST_Item.process_name": "流程199",
        },
        {
          "MST_Item.category_code": "CAT1",
        },
        {
          "MST_Item.code": "ITEM00199",
        },
        {
          "MST_Item.product": "产品9",
        },
        {
          "MST_Item.product_line": "线4",
        },
        {
          "MST_Item.template": "模板3",
        },
        {
          "MST_Item.modify_time": "2024-09-20T00:00:00Z",
        },
        {
          "MST_Item.restricted_state": "state3",
        },
        {
          "MST_Item.lastest_version": "v7.0",
        },
        {
          "MST_Item.state": "in-use",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x1593d5f2",
      x: null,
      y: null,
      icon: "comment-alt",
      color: "rgba(189,189,21,1)",
      displayName: "事件36",
      dgraphType: ["MST_Event"],
      properties: [
        {
          "MST_Event.name": "事件36",
        },
        {
          "MST_Event.key4": "key4_36",
        },
        {
          "MST_Event.key5": "key5_36",
        },
        {
          "MST_Event.key2": "key2_36",
        },
        {
          "MST_Event.key3": "key3_36",
        },
        {
          "MST_Event.classification": "异常",
        },
        {
          "MST_Event.value3": "value3_36",
        },
        {
          "MST_Event.value2": "value2_36",
        },
        {
          "MST_Event.value1": "value1_36",
        },
        {
          "MST_Event.type_l2": "延迟",
        },
        {
          "MST_Event.description": "交付延期36",
        },
        {
          "MST_Event.is_key_event": "否",
        },
        {
          "MST_Event.url_address": "http://event36.com",
        },
        {
          "MST_Event.event_key": "EVT0036",
        },
        {
          "MST_Event.key1": "key1_36",
        },
        {
          "MST_Event.value4": "value4_36",
        },
        {
          "MST_Event.value5": "value5_36",
        },
        {
          "MST_Event.event_object": "物料事件36",
        },
        {
          "MST_Event.event_date": "2021-10-23T00:00:00Z",
        },
        {
          "MST_Event.type_l1": "采购",
        },
        {
          "MST_Event.abnormal_behavior_or_result": "异常行为描述36",
        },
        {
          "MST_Event.url_name": "详情页36",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x15a49eda",
      x: null,
      y: null,
      icon: "clipboard-list-check",
      color: "rgba(204,6,177,1)",
      displayName: "项目124",
      dgraphType: ["MST_Project"],
      properties: [
        {
          "MST_Project.classificationl1": "一级分类",
        },
        {
          "MST_Project.classificationl2": "二级分类",
        },
        {
          "MST_Project.status": "进行中",
        },
        {
          "MST_Project.classificationl3": "三级分类",
        },
        {
          "MST_Project.team": "团队4",
        },
        {
          "MST_Project.background": "背景说明124",
        },
        {
          "MST_Project.classification": "重点",
        },
        {
          "MST_Project.end_date": "2025-11-04T00:00:00Z",
        },
        {
          "MST_Project.kind": "类型0",
        },
        {
          "MST_Project.start_date": "2022-06-13T00:00:00Z",
        },
        {
          "MST_Project.risk": "低",
        },
        {
          "MST_Project.name": "项目124",
        },
        {
          "MST_Project.project_no": "PRJ0124",
        },
        {
          "MST_Project.type_name": "物料采购",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x1590c8bb",
      x: null,
      y: null,
      icon: "comment-alt",
      color: "rgba(189,189,21,1)",
      displayName: "事件4",
      dgraphType: ["MST_Event"],
      properties: [
        {
          "MST_Event.classification": "异常",
        },
        {
          "MST_Event.value2": "value2_4",
        },
        {
          "MST_Event.value3": "value3_4",
        },
        {
          "MST_Event.value1": "value1_4",
        },
        {
          "MST_Event.value4": "value4_4",
        },
        {
          "MST_Event.value5": "value5_4",
        },
        {
          "MST_Event.type_l2": "延迟",
        },
        {
          "MST_Event.url_name": "详情页4",
        },
        {
          "MST_Event.name": "事件4",
        },
        {
          "MST_Event.key1": "key1_4",
        },
        {
          "MST_Event.key2": "key2_4",
        },
        {
          "MST_Event.key3": "key3_4",
        },
        {
          "MST_Event.key4": "key4_4",
        },
        {
          "MST_Event.key5": "key5_4",
        },
        {
          "MST_Event.is_key_event": "否",
        },
        {
          "MST_Event.description": "交付延期4",
        },
        {
          "MST_Event.event_key": "EVT0004",
        },
        {
          "MST_Event.event_date": "2022-01-25T00:00:00Z",
        },
        {
          "MST_Event.event_object": "物料事件4",
        },
        {
          "MST_Event.url_address": "http://event4.com",
        },
        {
          "MST_Event.abnormal_behavior_or_result": "异常行为描述4",
        },
        {
          "MST_Event.type_l1": "采购",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x16140265",
      x: null,
      y: null,
      icon: "comment-alt",
      color: "rgba(189,189,21,1)",
      displayName: "下PO",
      dgraphType: ["MST_Event"],
      properties: [
        {
          "MST_Event.value3": "value3_1",
        },
        {
          "MST_Event.type_l1": "下PO",
        },
        {
          "MST_Event.key2": "key2_1",
        },
        {
          "MST_Event.key4": "key4_1",
        },
        {
          "MST_Event.key3": "key3_1",
        },
        {
          "MST_Event.classification": "异常",
        },
        {
          "MST_Event.type_l2": "下PO",
        },
        {
          "MST_Event.value1": "value1_1",
        },
        {
          "MST_Event.value2": "value2_1",
        },
        {
          "MST_Event.value5": "value5_1",
        },
        {
          "MST_Event.url_address": "http://event1.com",
        },
        {
          "MST_Event.is_key_event": "否",
        },
        {
          "MST_Event.value4": "value4_1",
        },
        {
          "MST_Event.event_date": "2024-05-07T00:00:00Z",
        },
        {
          "MST_Event.key1": "key1_1",
        },
        {
          "MST_Event.key5": "key5_1",
        },
        {
          "MST_Event.url_name": "详情页1",
        },
        {
          "MST_Event.event_key": "EVT0001",
        },
        {
          "MST_Event.description": "交付延期1",
        },
        {
          "MST_Event.abnormal_behavior_or_result": "异常行为描述1",
        },
        {
          "MST_Event.event_object": "物料事件1",
        },
        {
          "MST_Event.name": "下PO",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x158f421a",
      x: null,
      y: null,
      icon: "clipboard-list-check",
      color: "rgba(204,6,177,1)",
      displayName: "项目111",
      dgraphType: ["MST_Project"],
      properties: [
        {
          "MST_Project.classificationl1": "一级分类",
        },
        {
          "MST_Project.classificationl2": "二级分类",
        },
        {
          "MST_Project.status": "进行中",
        },
        {
          "MST_Project.classificationl3": "三级分类",
        },
        {
          "MST_Project.team": "团队1",
        },
        {
          "MST_Project.start_date": "2023-08-17T00:00:00Z",
        },
        {
          "MST_Project.background": "背景说明111",
        },
        {
          "MST_Project.classification": "重点",
        },
        {
          "MST_Project.end_date": "2024-07-17T00:00:00Z",
        },
        {
          "MST_Project.kind": "类型3",
        },
        {
          "MST_Project.risk": "低",
        },
        {
          "MST_Project.name": "项目111",
        },
        {
          "MST_Project.project_no": "PRJ0111",
        },
        {
          "MST_Project.type_name": "物料采购",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x1590c8bf",
      x: null,
      y: null,
      icon: "clipboard-list-check",
      color: "rgba(204,6,177,1)",
      displayName: "项目10",
      dgraphType: ["MST_Project"],
      properties: [
        {
          "MST_Project.classificationl1": "一级分类",
        },
        {
          "MST_Project.start_date": "2023-12-14T00:00:00Z",
        },
        {
          "MST_Project.classificationl2": "二级分类",
        },
        {
          "MST_Project.team": "团队0",
        },
        {
          "MST_Project.status": "进行中",
        },
        {
          "MST_Project.classificationl3": "三级分类",
        },
        {
          "MST_Project.classification": "重点",
        },
        {
          "MST_Project.project_no": "PRJ0010",
        },
        {
          "MST_Project.name": "项目10",
        },
        {
          "MST_Project.risk": "低",
        },
        {
          "MST_Project.kind": "类型2",
        },
        {
          "MST_Project.end_date": "2025-06-12T00:00:00Z",
        },
        {
          "MST_Project.background": "背景说明10",
        },
        {
          "MST_Project.type_name": "物料采购",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x1590c8be",
      x: null,
      y: null,
      icon: "clipboard-list-check",
      color: "rgba(204,6,177,1)",
      displayName: "项目6",
      dgraphType: ["MST_Project"],
      properties: [
        {
          "MST_Project.start_date": "2022-08-16T00:00:00Z",
        },
        {
          "MST_Project.classificationl1": "一级分类",
        },
        {
          "MST_Project.name": "项目6",
        },
        {
          "MST_Project.classificationl2": "二级分类",
        },
        {
          "MST_Project.status": "进行中",
        },
        {
          "MST_Project.classificationl3": "三级分类",
        },
        {
          "MST_Project.team": "团队1",
        },
        {
          "MST_Project.classification": "重点",
        },
        {
          "MST_Project.end_date": "2024-03-12T00:00:00Z",
        },
        {
          "MST_Project.risk": "低",
        },
        {
          "MST_Project.kind": "类型2",
        },
        {
          "MST_Project.project_no": "PRJ0006",
        },
        {
          "MST_Project.background": "背景说明6",
        },
        {
          "MST_Project.type_name": "物料采购",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x158f421b",
      x: null,
      y: null,
      icon: "clipboard-list-check",
      color: "rgba(204,6,177,1)",
      displayName: "项目125",
      dgraphType: ["MST_Project"],
      properties: [
        {
          "MST_Project.classificationl1": "一级分类",
        },
        {
          "MST_Project.classificationl2": "二级分类",
        },
        {
          "MST_Project.team": "团队0",
        },
        {
          "MST_Project.status": "进行中",
        },
        {
          "MST_Project.classificationl3": "三级分类",
        },
        {
          "MST_Project.background": "背景说明125",
        },
        {
          "MST_Project.classification": "重点",
        },
        {
          "MST_Project.kind": "类型1",
        },
        {
          "MST_Project.project_no": "PRJ0125",
        },
        {
          "MST_Project.start_date": "2021-06-11T00:00:00Z",
        },
        {
          "MST_Project.risk": "低",
        },
        {
          "MST_Project.end_date": "2024-04-20T00:00:00Z",
        },
        {
          "MST_Project.name": "项目125",
        },
        {
          "MST_Project.type_name": "物料采购",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x1590c8bc",
      x: null,
      y: null,
      icon: "comment-alt",
      color: "rgba(189,189,21,1)",
      displayName: "事件74",
      dgraphType: ["MST_Event"],
      properties: [
        {
          "MST_Event.url_address": "http://event74.com",
        },
        {
          "MST_Event.classification": "异常",
        },
        {
          "MST_Event.key2": "key2_74",
        },
        {
          "MST_Event.key3": "key3_74",
        },
        {
          "MST_Event.name": "事件74",
        },
        {
          "MST_Event.key1": "key1_74",
        },
        {
          "MST_Event.type_l2": "延迟",
        },
        {
          "MST_Event.key4": "key4_74",
        },
        {
          "MST_Event.key5": "key5_74",
        },
        {
          "MST_Event.is_key_event": "否",
        },
        {
          "MST_Event.event_date": "2021-11-15T00:00:00Z",
        },
        {
          "MST_Event.abnormal_behavior_or_result": "异常行为描述74",
        },
        {
          "MST_Event.value3": "value3_74",
        },
        {
          "MST_Event.value2": "value2_74",
        },
        {
          "MST_Event.description": "交付延期74",
        },
        {
          "MST_Event.event_key": "EVT0074",
        },
        {
          "MST_Event.url_name": "详情页74",
        },
        {
          "MST_Event.value1": "value1_74",
        },
        {
          "MST_Event.type_l1": "采购",
        },
        {
          "MST_Event.value4": "value4_74",
        },
        {
          "MST_Event.value5": "value5_74",
        },
        {
          "MST_Event.event_object": "物料事件74",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x1593d5fa",
      x: null,
      y: null,
      icon: "clipboard-list-check",
      color: "rgba(204,6,177,1)",
      displayName: "项目144",
      dgraphType: ["MST_Project"],
      properties: [
        {
          "MST_Project.classificationl1": "一级分类",
        },
        {
          "MST_Project.start_date": "2023-07-14T00:00:00Z",
        },
        {
          "MST_Project.classificationl2": "二级分类",
        },
        {
          "MST_Project.status": "进行中",
        },
        {
          "MST_Project.classificationl3": "三级分类",
        },
        {
          "MST_Project.team": "团队4",
        },
        {
          "MST_Project.background": "背景说明144",
        },
        {
          "MST_Project.classification": "重点",
        },
        {
          "MST_Project.end_date": "2025-02-04T00:00:00Z",
        },
        {
          "MST_Project.kind": "类型0",
        },
        {
          "MST_Project.risk": "低",
        },
        {
          "MST_Project.name": "项目144",
        },
        {
          "MST_Project.project_no": "PRJ0144",
        },
        {
          "MST_Project.type_name": "物料采购",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x15a31847",
      x: null,
      y: null,
      icon: "comment-alt",
      color: "rgba(189,189,21,1)",
      displayName: "事件86",
      dgraphType: ["MST_Event"],
      properties: [
        {
          "MST_Event.classification": "异常",
        },
        {
          "MST_Event.key4": "key4_86",
        },
        {
          "MST_Event.key3": "key3_86",
        },
        {
          "MST_Event.name": "事件86",
        },
        {
          "MST_Event.key2": "key2_86",
        },
        {
          "MST_Event.type_l2": "延迟",
        },
        {
          "MST_Event.key1": "key1_86",
        },
        {
          "MST_Event.key5": "key5_86",
        },
        {
          "MST_Event.is_key_event": "否",
        },
        {
          "MST_Event.event_date": "2021-12-06T00:00:00Z",
        },
        {
          "MST_Event.url_name": "详情页86",
        },
        {
          "MST_Event.abnormal_behavior_or_result": "异常行为描述86",
        },
        {
          "MST_Event.url_address": "http://event86.com",
        },
        {
          "MST_Event.description": "交付延期86",
        },
        {
          "MST_Event.value3": "value3_86",
        },
        {
          "MST_Event.value2": "value2_86",
        },
        {
          "MST_Event.value1": "value1_86",
        },
        {
          "MST_Event.event_key": "EVT0086",
        },
        {
          "MST_Event.type_l1": "采购",
        },
        {
          "MST_Event.value4": "value4_86",
        },
        {
          "MST_Event.value5": "value5_86",
        },
        {
          "MST_Event.event_object": "物料事件86",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x15b567b0",
      x: null,
      y: null,
      icon: "box-full",
      color: "rgba(173,66,14,1)",
      displayName: "物料282",
      dgraphType: ["MST_Item"],
      properties: [
        {
          "MST_Item.version": "v4.0",
        },
        {
          "MST_Item.creator": "创建人282",
        },
        {
          "MST_Item.status": "active",
        },
        {
          "MST_Item.modify_time": "2025-08-29T00:00:00Z",
        },
        {
          "MST_Item.name": "物料282",
        },
        {
          "MST_Item.source": "采购",
        },
        {
          "MST_Item.lifecycle_state": "已上线",
        },
        {
          "MST_Item.process_name": "流程282",
        },
        {
          "MST_Item.category_code": "CAT0",
        },
        {
          "MST_Item.modifier": "修改人282",
        },
        {
          "MST_Item.createtime": "2021-08-25T00:00:00Z",
        },
        {
          "MST_Item.restricted_state": "state2",
        },
        {
          "MST_Item.last_updated_time": "2023-03-05T00:00:00Z",
        },
        {
          "MST_Item.template": "模板2",
        },
        {
          "MST_Item.product_line": "线2",
        },
        {
          "MST_Item.state": "in-use",
        },
        {
          "MST_Item.product": "产品2",
        },
        {
          "MST_Item.lastest_version": "v5.0",
        },
        {
          "MST_Item.code": "ITEM00282",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x1596e338",
      x: null,
      y: null,
      icon: "box-full",
      color: "rgba(173,66,14,1)",
      displayName: "物料180",
      dgraphType: ["MST_Item"],
      properties: [
        {
          "MST_Item.version": "v6.0",
        },
        {
          "MST_Item.restricted_state": "state0",
        },
        {
          "MST_Item.last_updated_time": "2025-06-13T00:00:00Z",
        },
        {
          "MST_Item.modify_time": "2021-03-17T00:00:00Z",
        },
        {
          "MST_Item.name": "物料180",
        },
        {
          "MST_Item.status": "active",
        },
        {
          "MST_Item.createtime": "2025-09-25T00:00:00Z",
        },
        {
          "MST_Item.process_name": "流程180",
        },
        {
          "MST_Item.source": "采购",
        },
        {
          "MST_Item.lifecycle_state": "已上线",
        },
        {
          "MST_Item.modifier": "修改人180",
        },
        {
          "MST_Item.code": "ITEM00180",
        },
        {
          "MST_Item.product": "产品0",
        },
        {
          "MST_Item.category_code": "CAT0",
        },
        {
          "MST_Item.lastest_version": "v9.0",
        },
        {
          "MST_Item.creator": "创建人180",
        },
        {
          "MST_Item.state": "in-use",
        },
        {
          "MST_Item.template": "模板0",
        },
        {
          "MST_Item.product_line": "线0",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x158f4210",
      x: null,
      y: null,
      icon: "box-full",
      color: "rgba(173,66,14,1)",
      displayName: "物料46",
      dgraphType: ["MST_Item"],
      properties: [
        {
          "MST_Item.createtime": "2022-11-28T00:00:00Z",
        },
        {
          "MST_Item.modify_time": "2024-02-23T00:00:00Z",
        },
        {
          "MST_Item.status": "active",
        },
        {
          "MST_Item.source": "采购",
        },
        {
          "MST_Item.lifecycle_state": "已上线",
        },
        {
          "MST_Item.category_code": "CAT4",
        },
        {
          "MST_Item.last_updated_time": "2023-11-25T00:00:00Z",
        },
        {
          "MST_Item.name": "物料46",
        },
        {
          "MST_Item.modifier": "修改人46",
        },
        {
          "MST_Item.restricted_state": "state2",
        },
        {
          "MST_Item.code": "ITEM00046",
        },
        {
          "MST_Item.product": "产品6",
        },
        {
          "MST_Item.process_name": "流程46",
        },
        {
          "MST_Item.creator": "创建人46",
        },
        {
          "MST_Item.template": "模板2",
        },
        {
          "MST_Item.version": "v1.0",
        },
        {
          "MST_Item.product_line": "线1",
        },
        {
          "MST_Item.state": "in-use",
        },
        {
          "MST_Item.lastest_version": "v4.0",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x158f4211",
      x: null,
      y: null,
      icon: "box-full",
      color: "rgba(173,66,14,1)",
      displayName: "物料64",
      dgraphType: ["MST_Item"],
      properties: [
        {
          "MST_Item.modify_time": "2023-05-15T00:00:00Z",
        },
        {
          "MST_Item.createtime": "2023-11-27T00:00:00Z",
        },
        {
          "MST_Item.version": "v8.0",
        },
        {
          "MST_Item.restricted_state": "state0",
        },
        {
          "MST_Item.status": "active",
        },
        {
          "MST_Item.source": "采购",
        },
        {
          "MST_Item.name": "物料64",
        },
        {
          "MST_Item.lifecycle_state": "已上线",
        },
        {
          "MST_Item.modifier": "修改人64",
        },
        {
          "MST_Item.category_code": "CAT4",
        },
        {
          "MST_Item.product_line": "线4",
        },
        {
          "MST_Item.product": "产品4",
        },
        {
          "MST_Item.code": "ITEM00064",
        },
        {
          "MST_Item.state": "in-use",
        },
        {
          "MST_Item.template": "模板0",
        },
        {
          "MST_Item.process_name": "流程64",
        },
        {
          "MST_Item.lastest_version": "v5.0",
        },
        {
          "MST_Item.creator": "创建人64",
        },
        {
          "MST_Item.last_updated_time": "2023-07-13T00:00:00Z",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x1590c8c0",
      x: null,
      y: null,
      icon: "clipboard-list-check",
      color: "rgba(204,6,177,1)",
      displayName: "项目50",
      dgraphType: ["MST_Project"],
      properties: [
        {
          "MST_Project.classificationl1": "一级分类",
        },
        {
          "MST_Project.end_date": "2025-05-15T00:00:00Z",
        },
        {
          "MST_Project.classificationl2": "二级分类",
        },
        {
          "MST_Project.team": "团队0",
        },
        {
          "MST_Project.status": "进行中",
        },
        {
          "MST_Project.classificationl3": "三级分类",
        },
        {
          "MST_Project.classification": "重点",
        },
        {
          "MST_Project.name": "项目50",
        },
        {
          "MST_Project.project_no": "PRJ0050",
        },
        {
          "MST_Project.background": "背景说明50",
        },
        {
          "MST_Project.risk": "低",
        },
        {
          "MST_Project.kind": "类型2",
        },
        {
          "MST_Project.start_date": "2023-05-24T00:00:00Z",
        },
        {
          "MST_Project.type_name": "物料采购",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x158f4214",
      x: null,
      y: null,
      icon: "box-full",
      color: "rgba(173,66,14,1)",
      displayName: "物料213",
      dgraphType: ["MST_Item"],
      properties: [
        {
          "MST_Item.version": "v9.0",
        },
        {
          "MST_Item.createtime": "2023-05-08T00:00:00Z",
        },
        {
          "MST_Item.last_updated_time": "2025-01-30T00:00:00Z",
        },
        {
          "MST_Item.code": "ITEM00213",
        },
        {
          "MST_Item.modify_time": "2025-04-02T00:00:00Z",
        },
        {
          "MST_Item.status": "active",
        },
        {
          "MST_Item.creator": "创建人213",
        },
        {
          "MST_Item.source": "采购",
        },
        {
          "MST_Item.lifecycle_state": "已上线",
        },
        {
          "MST_Item.modifier": "修改人213",
        },
        {
          "MST_Item.category_code": "CAT3",
        },
        {
          "MST_Item.name": "物料213",
        },
        {
          "MST_Item.process_name": "流程213",
        },
        {
          "MST_Item.restricted_state": "state1",
        },
        {
          "MST_Item.product_line": "线3",
        },
        {
          "MST_Item.lastest_version": "v9.0",
        },
        {
          "MST_Item.template": "模板1",
        },
        {
          "MST_Item.state": "in-use",
        },
        {
          "MST_Item.product": "产品3",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x15b874ff",
      x: null,
      y: null,
      icon: "comment-alt",
      color: "rgba(189,189,21,1)",
      displayName: "事件118",
      dgraphType: ["MST_Event"],
      properties: [
        {
          "MST_Event.key4": "key4_118",
        },
        {
          "MST_Event.classification": "异常",
        },
        {
          "MST_Event.value1": "value1_118",
        },
        {
          "MST_Event.value5": "value5_118",
        },
        {
          "MST_Event.type_l2": "延迟",
        },
        {
          "MST_Event.value3": "value3_118",
        },
        {
          "MST_Event.name": "事件118",
        },
        {
          "MST_Event.description": "交付延期118",
        },
        {
          "MST_Event.url_name": "详情页118",
        },
        {
          "MST_Event.abnormal_behavior_or_result": "异常行为描述118",
        },
        {
          "MST_Event.is_key_event": "否",
        },
        {
          "MST_Event.key2": "key2_118",
        },
        {
          "MST_Event.key5": "key5_118",
        },
        {
          "MST_Event.url_address": "http://event118.com",
        },
        {
          "MST_Event.value4": "value4_118",
        },
        {
          "MST_Event.key1": "key1_118",
        },
        {
          "MST_Event.value2": "value2_118",
        },
        {
          "MST_Event.event_date": "2021-07-26T00:00:00Z",
        },
        {
          "MST_Event.event_object": "物料事件118",
        },
        {
          "MST_Event.type_l1": "采购",
        },
        {
          "MST_Event.key3": "key3_118",
        },
        {
          "MST_Event.event_key": "EVT0118",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x16140261",
      x: null,
      y: null,
      icon: "comment-alt",
      color: "rgba(189,189,21,1)",
      displayName: "下PO",
      dgraphType: ["MST_Event"],
      properties: [
        {
          "MST_Event.type_l1": "下PO",
        },
        {
          "MST_Event.value2": "value2_2",
        },
        {
          "MST_Event.value3": "value3_2",
        },
        {
          "MST_Event.classification": "异常",
        },
        {
          "MST_Event.type_l2": "下PO",
        },
        {
          "MST_Event.key2": "key2_2",
        },
        {
          "MST_Event.key3": "key3_2",
        },
        {
          "MST_Event.value1": "value1_2",
        },
        {
          "MST_Event.url_name": "详情页2",
        },
        {
          "MST_Event.value4": "value4_2",
        },
        {
          "MST_Event.value5": "value5_2",
        },
        {
          "MST_Event.is_key_event": "否",
        },
        {
          "MST_Event.key1": "key1_2",
        },
        {
          "MST_Event.key4": "key4_2",
        },
        {
          "MST_Event.key5": "key5_2",
        },
        {
          "MST_Event.description": "交付延期2",
        },
        {
          "MST_Event.event_key": "EVT0002",
        },
        {
          "MST_Event.event_date": "2021-11-18T00:00:00Z",
        },
        {
          "MST_Event.url_address": "http://event2.com",
        },
        {
          "MST_Event.abnormal_behavior_or_result": "异常行为描述2",
        },
        {
          "MST_Event.name": "下PO",
        },
        {
          "MST_Event.event_object": "物料事件2",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x158f4215",
      x: null,
      y: null,
      icon: "box-full",
      color: "rgba(173,66,14,1)",
      displayName: "物料259",
      dgraphType: ["MST_Item"],
      properties: [
        {
          "MST_Item.version": "v6.0",
        },
        {
          "MST_Item.code": "ITEM00259",
        },
        {
          "MST_Item.status": "active",
        },
        {
          "MST_Item.modify_time": "2023-02-06T00:00:00Z",
        },
        {
          "MST_Item.modifier": "修改人259",
        },
        {
          "MST_Item.creator": "创建人259",
        },
        {
          "MST_Item.source": "采购",
        },
        {
          "MST_Item.lifecycle_state": "已上线",
        },
        {
          "MST_Item.category_code": "CAT1",
        },
        {
          "MST_Item.name": "物料259",
        },
        {
          "MST_Item.product": "产品9",
        },
        {
          "MST_Item.product_line": "线4",
        },
        {
          "MST_Item.template": "模板3",
        },
        {
          "MST_Item.last_updated_time": "2022-06-28T00:00:00Z",
        },
        {
          "MST_Item.restricted_state": "state3",
        },
        {
          "MST_Item.createtime": "2025-05-20T00:00:00Z",
        },
        {
          "MST_Item.state": "in-use",
        },
        {
          "MST_Item.process_name": "流程259",
        },
        {
          "MST_Item.lastest_version": "v5.0",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x16140262",
      x: null,
      y: null,
      icon: "comment-alt",
      color: "rgba(189,189,21,1)",
      displayName: "下PO",
      dgraphType: ["MST_Event"],
      properties: [
        {
          "MST_Event.value2": "value2_3",
        },
        {
          "MST_Event.type_l1": "下PO",
        },
        {
          "MST_Event.value3": "value3_3",
        },
        {
          "MST_Event.value1": "value1_3",
        },
        {
          "MST_Event.value5": "value5_3",
        },
        {
          "MST_Event.key2": "key2_3",
        },
        {
          "MST_Event.classification": "异常",
        },
        {
          "MST_Event.type_l2": "下PO",
        },
        {
          "MST_Event.url_name": "详情页3",
        },
        {
          "MST_Event.event_date": "2021-01-19T00:00:00Z",
        },
        {
          "MST_Event.url_address": "http://event3.com",
        },
        {
          "MST_Event.value4": "value4_3",
        },
        {
          "MST_Event.key1": "key1_3",
        },
        {
          "MST_Event.key3": "key3_3",
        },
        {
          "MST_Event.key5": "key5_3",
        },
        {
          "MST_Event.is_key_event": "否",
        },
        {
          "MST_Event.key4": "key4_3",
        },
        {
          "MST_Event.event_key": "EVT0003",
        },
        {
          "MST_Event.description": "交付延期3",
        },
        {
          "MST_Event.event_object": "物料事件3",
        },
        {
          "MST_Event.abnormal_behavior_or_result": "异常行为描述3",
        },
        {
          "MST_Event.name": "下PO",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x158f4212",
      x: null,
      y: null,
      icon: "box-full",
      color: "rgba(173,66,14,1)",
      displayName: "物料107",
      dgraphType: ["MST_Item"],
      properties: [
        {
          "MST_Item.version": "v4.0",
        },
        {
          "MST_Item.modifier": "修改人107",
        },
        {
          "MST_Item.code": "ITEM00107",
        },
        {
          "MST_Item.last_updated_time": "2022-07-08T00:00:00Z",
        },
        {
          "MST_Item.creator": "创建人107",
        },
        {
          "MST_Item.status": "active",
        },
        {
          "MST_Item.source": "采购",
        },
        {
          "MST_Item.lifecycle_state": "已上线",
        },
        {
          "MST_Item.modify_time": "2021-10-14T00:00:00Z",
        },
        {
          "MST_Item.category_code": "CAT5",
        },
        {
          "MST_Item.createtime": "2023-05-22T00:00:00Z",
        },
        {
          "MST_Item.name": "物料107",
        },
        {
          "MST_Item.lastest_version": "v8.0",
        },
        {
          "MST_Item.template": "模板3",
        },
        {
          "MST_Item.restricted_state": "state3",
        },
        {
          "MST_Item.product": "产品7",
        },
        {
          "MST_Item.product_line": "线2",
        },
        {
          "MST_Item.process_name": "流程107",
        },
        {
          "MST_Item.state": "in-use",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x16140263",
      x: null,
      y: null,
      icon: "comment-alt",
      color: "rgba(189,189,21,1)",
      displayName: "招标RFQ",
      dgraphType: ["MST_Event"],
      properties: [
        {
          "MST_Event.classification": "异常",
        },
        {
          "MST_Event.value2": "value2_4",
        },
        {
          "MST_Event.value3": "value3_4",
        },
        {
          "MST_Event.value1": "value1_4",
        },
        {
          "MST_Event.value4": "value4_4",
        },
        {
          "MST_Event.value5": "value5_4",
        },
        {
          "MST_Event.url_name": "详情页4",
        },
        {
          "MST_Event.key1": "key1_4",
        },
        {
          "MST_Event.key2": "key2_4",
        },
        {
          "MST_Event.key3": "key3_4",
        },
        {
          "MST_Event.key4": "key4_4",
        },
        {
          "MST_Event.key5": "key5_4",
        },
        {
          "MST_Event.is_key_event": "否",
        },
        {
          "MST_Event.type_l2": "RFQ",
        },
        {
          "MST_Event.description": "交付延期4",
        },
        {
          "MST_Event.event_key": "EVT0004",
        },
        {
          "MST_Event.event_date": "2022-01-25T00:00:00Z",
        },
        {
          "MST_Event.type_l1": "RFQ",
        },
        {
          "MST_Event.event_object": "物料事件4",
        },
        {
          "MST_Event.url_address": "http://event4.com",
        },
        {
          "MST_Event.abnormal_behavior_or_result": "异常行为描述4",
        },
        {
          "MST_Event.name": "招标RFQ",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x158f4213",
      x: null,
      y: null,
      icon: "box-full",
      color: "rgba(173,66,14,1)",
      displayName: "物料165",
      dgraphType: ["MST_Item"],
      properties: [
        {
          "MST_Item.creator": "创建人165",
        },
        {
          "MST_Item.version": "v5.0",
        },
        {
          "MST_Item.status": "active",
        },
        {
          "MST_Item.lastest_version": "v10.0",
        },
        {
          "MST_Item.modifier": "修改人165",
        },
        {
          "MST_Item.source": "采购",
        },
        {
          "MST_Item.last_updated_time": "2021-09-14T00:00:00Z",
        },
        {
          "MST_Item.createtime": "2024-09-02T00:00:00Z",
        },
        {
          "MST_Item.lifecycle_state": "已上线",
        },
        {
          "MST_Item.name": "物料165",
        },
        {
          "MST_Item.modify_time": "2025-01-17T00:00:00Z",
        },
        {
          "MST_Item.category_code": "CAT3",
        },
        {
          "MST_Item.process_name": "流程165",
        },
        {
          "MST_Item.restricted_state": "state1",
        },
        {
          "MST_Item.code": "ITEM00165",
        },
        {
          "MST_Item.template": "模板1",
        },
        {
          "MST_Item.state": "in-use",
        },
        {
          "MST_Item.product": "产品5",
        },
        {
          "MST_Item.product_line": "线0",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x16140264",
      x: null,
      y: null,
      icon: "comment-alt",
      color: "rgba(189,189,21,1)",
      displayName: "招标RFQ",
      dgraphType: ["MST_Event"],
      properties: [
        {
          "MST_Event.value1": "value1_5",
        },
        {
          "MST_Event.value5": "value5_5",
        },
        {
          "MST_Event.value2": "value2_5",
        },
        {
          "MST_Event.value4": "value4_5",
        },
        {
          "MST_Event.key1": "key1_5",
        },
        {
          "MST_Event.classification": "异常",
        },
        {
          "MST_Event.abnormal_behavior_or_result": "异常行为描述5",
        },
        {
          "MST_Event.key5": "key5_5",
        },
        {
          "MST_Event.url_name": "详情页5",
        },
        {
          "MST_Event.value3": "value3_5",
        },
        {
          "MST_Event.key2": "key2_5",
        },
        {
          "MST_Event.key4": "key4_5",
        },
        {
          "MST_Event.is_key_event": "否",
        },
        {
          "MST_Event.key3": "key3_5",
        },
        {
          "MST_Event.type_l2": "RFQ",
        },
        {
          "MST_Event.event_object": "物料事件5",
        },
        {
          "MST_Event.event_date": "2024-04-10T00:00:00Z",
        },
        {
          "MST_Event.type_l1": "RFQ",
        },
        {
          "MST_Event.url_address": "http://event5.com",
        },
        {
          "MST_Event.name": "招标RFQ",
        },
        {
          "MST_Event.event_key": "EVT0005",
        },
        {
          "MST_Event.description": "交付延期5",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x15a932bb",
      x: null,
      y: null,
      icon: "comment-alt",
      color: "rgba(189,189,21,1)",
      displayName: "事件148",
      dgraphType: ["MST_Event"],
      properties: [
        {
          "MST_Event.value5": "value5_148",
        },
        {
          "MST_Event.classification": "异常",
        },
        {
          "MST_Event.key4": "key4_148",
        },
        {
          "MST_Event.description": "交付延期148",
        },
        {
          "MST_Event.value3": "value3_148",
        },
        {
          "MST_Event.value1": "value1_148",
        },
        {
          "MST_Event.type_l2": "延迟",
        },
        {
          "MST_Event.key2": "key2_148",
        },
        {
          "MST_Event.name": "事件148",
        },
        {
          "MST_Event.is_key_event": "否",
        },
        {
          "MST_Event.abnormal_behavior_or_result": "异常行为描述148",
        },
        {
          "MST_Event.url_name": "详情页148",
        },
        {
          "MST_Event.value4": "value4_148",
        },
        {
          "MST_Event.key5": "key5_148",
        },
        {
          "MST_Event.event_date": "2022-10-09T00:00:00Z",
        },
        {
          "MST_Event.key1": "key1_148",
        },
        {
          "MST_Event.value2": "value2_148",
        },
        {
          "MST_Event.url_address": "http://event148.com",
        },
        {
          "MST_Event.type_l1": "采购",
        },
        {
          "MST_Event.key3": "key3_148",
        },
        {
          "MST_Event.event_object": "物料事件148",
        },
        {
          "MST_Event.event_key": "EVT0148",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x158f4219",
      x: null,
      y: null,
      icon: "clipboard-list-check",
      color: "rgba(204,6,177,1)",
      displayName: "项目22",
      dgraphType: ["MST_Project"],
      properties: [
        {
          "MST_Project.classificationl1": "一级分类",
        },
        {
          "MST_Project.classificationl2": "二级分类",
        },
        {
          "MST_Project.status": "进行中",
        },
        {
          "MST_Project.team": "团队2",
        },
        {
          "MST_Project.classificationl3": "三级分类",
        },
        {
          "MST_Project.start_date": "2023-03-02T00:00:00Z",
        },
        {
          "MST_Project.end_date": "2025-09-23T00:00:00Z",
        },
        {
          "MST_Project.classification": "重点",
        },
        {
          "MST_Project.name": "项目22",
        },
        {
          "MST_Project.risk": "低",
        },
        {
          "MST_Project.kind": "类型2",
        },
        {
          "MST_Project.project_no": "PRJ0022",
        },
        {
          "MST_Project.background": "背景说明22",
        },
        {
          "MST_Project.type_name": "物料采购",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x158f4216",
      x: null,
      y: null,
      icon: "box-full",
      color: "rgba(173,66,14,1)",
      displayName: "物料275",
      dgraphType: ["MST_Item"],
      properties: [
        {
          "MST_Item.modify_time": "2021-12-29T00:00:00Z",
        },
        {
          "MST_Item.creator": "创建人275",
        },
        {
          "MST_Item.version": "v9.0",
        },
        {
          "MST_Item.status": "active",
        },
        {
          "MST_Item.modifier": "修改人275",
        },
        {
          "MST_Item.source": "采购",
        },
        {
          "MST_Item.lifecycle_state": "已上线",
        },
        {
          "MST_Item.category_code": "CAT5",
        },
        {
          "MST_Item.name": "物料275",
        },
        {
          "MST_Item.process_name": "流程275",
        },
        {
          "MST_Item.last_updated_time": "2025-08-19T00:00:00Z",
        },
        {
          "MST_Item.lastest_version": "v8.0",
        },
        {
          "MST_Item.template": "模板3",
        },
        {
          "MST_Item.code": "ITEM00275",
        },
        {
          "MST_Item.restricted_state": "state3",
        },
        {
          "MST_Item.state": "in-use",
        },
        {
          "MST_Item.product": "产品5",
        },
        {
          "MST_Item.product_line": "线0",
        },
        {
          "MST_Item.createtime": "2023-05-17T00:00:00Z",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x15924f4c",
      x: null,
      y: null,
      icon: "box-full",
      color: "rgba(173,66,14,1)",
      displayName: "物料133",
      dgraphType: ["MST_Item"],
      properties: [
        {
          "MST_Item.creator": "创建人133",
        },
        {
          "MST_Item.version": "v6.0",
        },
        {
          "MST_Item.modify_time": "2025-10-14T00:00:00Z",
        },
        {
          "MST_Item.modifier": "修改人133",
        },
        {
          "MST_Item.status": "active",
        },
        {
          "MST_Item.source": "采购",
        },
        {
          "MST_Item.lifecycle_state": "已上线",
        },
        {
          "MST_Item.name": "物料133",
        },
        {
          "MST_Item.process_name": "流程133",
        },
        {
          "MST_Item.category_code": "CAT1",
        },
        {
          "MST_Item.code": "ITEM00133",
        },
        {
          "MST_Item.restricted_state": "state1",
        },
        {
          "MST_Item.product_line": "线3",
        },
        {
          "MST_Item.lastest_version": "v9.0",
        },
        {
          "MST_Item.template": "模板1",
        },
        {
          "MST_Item.last_updated_time": "2021-01-02T00:00:00Z",
        },
        {
          "MST_Item.state": "in-use",
        },
        {
          "MST_Item.createtime": "2023-12-23T00:00:00Z",
        },
        {
          "MST_Item.product": "产品3",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x15ac3ff7",
      x: null,
      y: null,
      icon: "comment-alt",
      color: "rgba(189,189,21,1)",
      displayName: "事件131",
      dgraphType: ["MST_Event"],
      properties: [
        {
          "MST_Event.key2": "key2_131",
        },
        {
          "MST_Event.classification": "异常",
        },
        {
          "MST_Event.description": "交付延期131",
        },
        {
          "MST_Event.value3": "value3_131",
        },
        {
          "MST_Event.name": "事件131",
        },
        {
          "MST_Event.type_l2": "延迟",
        },
        {
          "MST_Event.key4": "key4_131",
        },
        {
          "MST_Event.is_key_event": "否",
        },
        {
          "MST_Event.value1": "value1_131",
        },
        {
          "MST_Event.value5": "value5_131",
        },
        {
          "MST_Event.event_date": "2023-06-30T00:00:00Z",
        },
        {
          "MST_Event.value2": "value2_131",
        },
        {
          "MST_Event.event_object": "物料事件131",
        },
        {
          "MST_Event.url_address": "http://event131.com",
        },
        {
          "MST_Event.event_key": "EVT0131",
        },
        {
          "MST_Event.abnormal_behavior_or_result": "异常行为描述131",
        },
        {
          "MST_Event.key3": "key3_131",
        },
        {
          "MST_Event.url_name": "详情页131",
        },
        {
          "MST_Event.key5": "key5_131",
        },
        {
          "MST_Event.value4": "value4_131",
        },
        {
          "MST_Event.type_l1": "采购",
        },
        {
          "MST_Event.key1": "key1_131",
        },
      ],
      temporary: false,
      remark: null,
    },
    {
      uid: "0x15bb8236",
      x: null,
      y: null,
      icon: "comment-alt",
      color: "rgba(189,189,21,1)",
      displayName: "事件33",
      dgraphType: ["MST_Event"],
      properties: [
        {
          "MST_Event.key2": "key2_33",
        },
        {
          "MST_Event.classification": "异常",
        },
        {
          "MST_Event.key5": "key5_33",
        },
        {
          "MST_Event.url_address": "http://event33.com",
        },
        {
          "MST_Event.name": "事件33",
        },
        {
          "MST_Event.key4": "key4_33",
        },
        {
          "MST_Event.key3": "key3_33",
        },
        {
          "MST_Event.type_l2": "延迟",
        },
        {
          "MST_Event.is_key_event": "否",
        },
        {
          "MST_Event.key1": "key1_33",
        },
        {
          "MST_Event.event_date": "2025-04-14T00:00:00Z",
        },
        {
          "MST_Event.url_name": "详情页33",
        },
        {
          "MST_Event.value1": "value1_33",
        },
        {
          "MST_Event.description": "交付延期33",
        },
        {
          "MST_Event.value3": "value3_33",
        },
        {
          "MST_Event.event_key": "EVT0033",
        },
        {
          "MST_Event.value2": "value2_33",
        },
        {
          "MST_Event.abnormal_behavior_or_result": "异常行为描述33",
        },
        {
          "MST_Event.value4": "value4_33",
        },
        {
          "MST_Event.type_l1": "采购",
        },
        {
          "MST_Event.value5": "value5_33",
        },
        {
          "MST_Event.event_object": "物料事件33",
        },
      ],
      temporary: false,
      remark: null,
    },
  ],
  relationships: [
    {
      id: null,
      name: "MST_Item.item_to_event",
      sourceNode: "0x158f4210",
      sourceType: "MST_Item",
      targetNode: "0x16140262",
      targetType: "MST_Event",
      displayName: "物料与事件",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [
        {
          start_date: "2021-01-19T00:00:00Z",
        },
        {
          relation_type_l1: "PO",
        },
        {
          relation_type_l2: "下PO",
        },
      ],
    },
    {
      id: null,
      name: "MST_Item.temp_code",
      sourceNode: "0x15a00aec",
      sourceType: "MST_Item",
      targetNode: "0x15b567b0",
      targetType: "MST_Item",
      displayName: "物料与物料临时与正式编码关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Item.split",
      sourceNode: "0x158f4210",
      sourceType: "MST_Item",
      targetNode: "0x158f4212",
      targetType: "MST_Item",
      displayName: "物料与物料拆分关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [
        {
          change_description: "ONEPRO",
        },
        {
          change_type: "拆分电子流",
        },
      ],
    },
    {
      id: null,
      name: "MST_Project.project_to_event",
      sourceNode: "0x158f4219",
      sourceType: "MST_Project",
      targetNode: "0x16140261",
      targetType: "MST_Event",
      displayName: "项目与事件关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Item.item_to_event",
      sourceNode: "0x158f4215",
      sourceType: "MST_Item",
      targetNode: "0x1590c8bb",
      targetType: "MST_Event",
      displayName: "物料与事件",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Project.project_to_item",
      sourceNode: "0x158f421a",
      sourceType: "MST_Project",
      targetNode: "0x158f4210",
      targetType: "MST_Item",
      displayName: "项目与物料关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [
        {
          scenario: "文档上载",
        },
        {
          scenario_l1: "物料选型认证",
        },
        {
          relation_type: "选型文档与ITEM关系",
        },
      ],
    },
    {
      id: null,
      name: "MST_Item.item_to_event",
      sourceNode: "0x158f4214",
      sourceType: "MST_Item",
      targetNode: "0x15b874f7",
      targetType: "MST_Event",
      displayName: "物料与事件",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Project.project_to_item",
      sourceNode: "0x158f421b",
      sourceType: "MST_Project",
      targetNode: "0x158f4210",
      targetType: "MST_Item",
      displayName: "项目与物料关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [
        {
          scenario: "文档上载",
        },
        {
          scenario_l1: "物料选型认证",
        },
        {
          relation_type: "选型文档与ITEM关系",
        },
      ],
    },
    {
      id: null,
      name: "MST_Item.substitution",
      sourceNode: "0x15a62574",
      sourceType: "MST_Item",
      targetNode: "0x158f4214",
      targetType: "MST_Item",
      displayName: "物料与物料替代关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Item.split",
      sourceNode: "0x15aab94e",
      sourceType: "MST_Item",
      targetNode: "0x158f4214",
      targetType: "MST_Item",
      displayName: "物料与物料拆分关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Item.item_to_event",
      sourceNode: "0x158f4210",
      sourceType: "MST_Item",
      targetNode: "0x16140264",
      targetType: "MST_Event",
      displayName: "物料与事件",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [
        {
          relation_type_l1: "选择",
        },
        {
          start_date: "2024-04-10T00:00:00Z",
        },
        {
          relation_type_l2: "招标RFQ",
        },
      ],
    },
    {
      id: null,
      name: "MST_Project.project_to_event",
      sourceNode: "0x158f4219",
      sourceType: "MST_Project",
      targetNode: "0x16140265",
      targetType: "MST_Event",
      displayName: "项目与事件关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Project.project_to_item",
      sourceNode: "0x158f4219",
      sourceType: "MST_Project",
      targetNode: "0x158f4210",
      targetType: "MST_Item",
      displayName: "项目与物料关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [
        {
          scenario: "文档上载",
        },
        {
          scenario_l1: "物料选型认证",
        },
        {
          relation_type: "选型文档与ITEM关系",
        },
      ],
    },
    {
      id: null,
      name: "MST_Project.project_to_event",
      sourceNode: "0x158f421b",
      sourceType: "MST_Project",
      targetNode: "0x15a932bb",
      targetType: "MST_Event",
      displayName: "项目与事件关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Item.substitution",
      sourceNode: "0x158f4210",
      sourceType: "MST_Item",
      targetNode: "0x158f4215",
      targetType: "MST_Item",
      displayName: "物料与物料替代关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [
        {
          change_type: "Different Marking",
        },
      ],
    },
    {
      id: null,
      name: "MST_Project.project_to_event",
      sourceNode: "0x158f421a",
      sourceType: "MST_Project",
      targetNode: "0x15a31847",
      targetType: "MST_Event",
      displayName: "项目与事件关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Item.item_to_event",
      sourceNode: "0x158f4214",
      sourceType: "MST_Item",
      targetNode: "0x15b874ff",
      targetType: "MST_Event",
      displayName: "物料与事件",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Project.project_to_event",
      sourceNode: "0x1590c8c0",
      sourceType: "MST_Project",
      targetNode: "0x15924f5b",
      targetType: "MST_Event",
      displayName: "项目与事件关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Item.substitution",
      sourceNode: "0x158f4211",
      sourceType: "MST_Item",
      targetNode: "0x15924f4c",
      targetType: "MST_Item",
      displayName: "物料与物料替代关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Project.project_to_event",
      sourceNode: "0x158f421b",
      sourceType: "MST_Project",
      targetNode: "0x16140261",
      targetType: "MST_Event",
      displayName: "项目与事件关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Project.project_to_item",
      sourceNode: "0x15b567c9",
      sourceType: "MST_Project",
      targetNode: "0x158f4216",
      targetType: "MST_Item",
      displayName: "项目与物料关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Item.split",
      sourceNode: "0x158f4210",
      sourceType: "MST_Item",
      targetNode: "0x15a00aec",
      targetType: "MST_Item",
      displayName: "物料与物料拆分关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Item.split",
      sourceNode: "0x158f4216",
      sourceType: "MST_Item",
      targetNode: "0x1596e338",
      targetType: "MST_Item",
      displayName: "物料与物料拆分关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Item.temp_code",
      sourceNode: "0x15b874f6",
      sourceType: "MST_Item",
      targetNode: "0x15a00aec",
      targetType: "MST_Item",
      displayName: "物料与物料临时与正式编码关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Item.item_to_event",
      sourceNode: "0x158f4211",
      sourceType: "MST_Item",
      targetNode: "0x15a932bb",
      targetType: "MST_Event",
      displayName: "物料与事件",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Item.split",
      sourceNode: "0x158f4210",
      sourceType: "MST_Item",
      targetNode: "0x158f4211",
      targetType: "MST_Item",
      displayName: "物料与物料拆分关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [
        {
          change_description: "ONEPRO",
        },
        {
          change_type: "拆分电子流",
        },
      ],
    },
    {
      id: null,
      name: "MST_Item.item_to_event",
      sourceNode: "0x158f4210",
      sourceType: "MST_Item",
      targetNode: "0x16140261",
      targetType: "MST_Event",
      displayName: "物料与事件",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [
        {
          relation_type_l1: "PO",
        },
        {
          relation_type_l2: "下PO",
        },
        {
          start_date: "2021-11-18T00:00:00Z",
        },
      ],
    },
    {
      id: null,
      name: "MST_Project.project_to_item",
      sourceNode: "0x15a49eda",
      sourceType: "MST_Project",
      targetNode: "0x158f4211",
      targetType: "MST_Item",
      displayName: "项目与物料关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Item.split",
      sourceNode: "0x158f4210",
      sourceType: "MST_Item",
      targetNode: "0x158f4213",
      targetType: "MST_Item",
      displayName: "物料与物料拆分关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [
        {
          change_description: "ONEPRO",
        },
        {
          change_type: "拆分电子流",
        },
      ],
    },
    {
      id: null,
      name: "MST_Project.project_to_event",
      sourceNode: "0x158f421b",
      sourceType: "MST_Project",
      targetNode: "0x16140263",
      targetType: "MST_Event",
      displayName: "项目与事件关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Project.project_to_event",
      sourceNode: "0x1590c8be",
      sourceType: "MST_Project",
      targetNode: "0x15be8f7f",
      targetType: "MST_Event",
      displayName: "项目与事件关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Project.project_to_event",
      sourceNode: "0x158f4219",
      sourceType: "MST_Project",
      targetNode: "0x15bb8236",
      targetType: "MST_Event",
      displayName: "项目与事件关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Project.project_to_item",
      sourceNode: "0x1590c8bf",
      sourceType: "MST_Project",
      targetNode: "0x158f4210",
      targetType: "MST_Item",
      displayName: "项目与物料关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [
        {
          scenario: "Bidding",
        },
        {
          relation_type: "供应商选择项目与ITEM关系",
        },
        {
          scenario_l1: "供应商选择项目",
        },
      ],
    },
    {
      id: null,
      name: "MST_Project.project_to_event",
      sourceNode: "0x158f421b",
      sourceType: "MST_Project",
      targetNode: "0x16140265",
      targetType: "MST_Event",
      displayName: "项目与事件关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Project.project_to_item",
      sourceNode: "0x1590c8be",
      sourceType: "MST_Project",
      targetNode: "0x158f4210",
      targetType: "MST_Item",
      displayName: "项目与物料关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [
        {
          relation_type: "供应商选择项目与ITEM关系",
        },
        {
          scenario: "Quick Quote",
        },
        {
          scenario_l1: "供应商选择项目",
        },
      ],
    },
    {
      id: null,
      name: "MST_Item.item_to_event",
      sourceNode: "0x158f4213",
      sourceType: "MST_Item",
      targetNode: "0x1590c8bc",
      targetType: "MST_Event",
      displayName: "物料与事件",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Project.project_to_event",
      sourceNode: "0x1590c8bf",
      sourceType: "MST_Project",
      targetNode: "0x1593d5f2",
      targetType: "MST_Event",
      displayName: "项目与事件关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Item.item_to_event",
      sourceNode: "0x158f4210",
      sourceType: "MST_Item",
      targetNode: "0x16140265",
      targetType: "MST_Event",
      displayName: "物料与事件",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [
        {
          relation_type_l1: "PO",
        },
        {
          start_date: "2024-05-07T00:00:00Z",
        },
        {
          relation_type_l2: "下PO",
        },
      ],
    },
    {
      id: null,
      name: "MST_Item.substitution",
      sourceNode: "0x158f4212",
      sourceType: "MST_Item",
      targetNode: "0x15bd08cd",
      targetType: "MST_Item",
      displayName: "物料与物料替代关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Project.project_to_item",
      sourceNode: "0x158f421b",
      sourceType: "MST_Project",
      targetNode: "0x15b874f6",
      targetType: "MST_Item",
      displayName: "项目与物料关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Project.project_to_item",
      sourceNode: "0x1590c8c0",
      sourceType: "MST_Project",
      targetNode: "0x158f4210",
      targetType: "MST_Item",
      displayName: "项目与物料关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [
        {
          scenario: "Bidding",
        },
        {
          relation_type: "供应商选择项目与ITEM关系",
        },
        {
          scenario_l1: "供应商选择项目",
        },
      ],
    },
    {
      id: null,
      name: "MST_Item.item_to_event",
      sourceNode: "0x158f4211",
      sourceType: "MST_Item",
      targetNode: "0x15ac3ff7",
      targetType: "MST_Event",
      displayName: "物料与事件",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Item.item_to_event",
      sourceNode: "0x158f4210",
      sourceType: "MST_Item",
      targetNode: "0x16140263",
      targetType: "MST_Event",
      displayName: "物料与事件",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [
        {
          relation_type_l1: "选择",
        },
        {
          start_date: "2022-01-25T00:00:00Z",
        },
        {
          relation_type_l2: "招标RFQ",
        },
      ],
    },
    {
      id: null,
      name: "MST_Item.substitution",
      sourceNode: "0x158f4210",
      sourceType: "MST_Item",
      targetNode: "0x158f4216",
      targetType: "MST_Item",
      displayName: "物料与物料替代关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [
        {
          change_type: "Different Marking",
        },
      ],
    },
    {
      id: null,
      name: "MST_Item.item_to_event",
      sourceNode: "0x158f4211",
      sourceType: "MST_Item",
      targetNode: "0x15b9fb95",
      targetType: "MST_Event",
      displayName: "物料与事件",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Project.project_to_item",
      sourceNode: "0x1593d5fa",
      sourceType: "MST_Project",
      targetNode: "0x158f4215",
      targetType: "MST_Item",
      displayName: "项目与物料关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [],
    },
    {
      id: null,
      name: "MST_Item.substitution",
      sourceNode: "0x158f4210",
      sourceType: "MST_Item",
      targetNode: "0x158f4214",
      targetType: "MST_Item",
      displayName: "物料与物料替代关系",
      temporary: null,
      color: "#cccccc",
      curve: "bezier",
      arrow: "triangle",
      width: 1,
      properties: [
        {
          change_type: "Different Marking",
        },
      ],
    },
  ],
};

mock.nodes.forEach((node) => {
  delete node.properties;
});

export function ToolUseProvider({
  children,
  onCallback,
}: {
  children: React.ReactNode;
  onCallback: (tool: {
    server_name: string;
    tool_name: string;
    args: any;
    result: any;
  }) => void;
}) {
  const call = (server_name: string, tool_name: string, args: any) => {
    console.log(server_name, tool_name, args);
    if (tool_name === "render_graph") {
      onCallback({ server_name, tool_name, args, result: args });
    } else if (tool_name === "search_company") {
      onCallback({ server_name, tool_name, args, result: mock });
    }
  };

  return (
    <ToolUseContext.Provider value={{ call }}>
      {children}
    </ToolUseContext.Provider>
  );
}

export function useToolUse() {
  const { call } = useContext(ToolUseContext);
  return call;
}
