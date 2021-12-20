import { Model } from "@blink-mind/core";

export const downloadFile = (url, filename) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
};

export function generateSimpleModel() {
  return Model.create({
    "rootTopicKey": "83dfa8ec-e56a-4b3a-a583-832497e10a20",
    "editorRootTopicKey": "83dfa8ec-e56a-4b3a-a583-832497e10a20",
    "focusKey": "83dfa8ec-e56a-4b3a-a583-832497e10a20",
    "extData": {},
    "topics": [
      {
        "key": "83dfa8ec-e56a-4b3a-a583-832497e10a20",
        "parentKey": null,
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Python"
          }
        ]
      }
    ],
    "config": {
      "readOnly": false,
      "allowUndo": true,
      "layoutDir": 2,
      "theme": {
        "name": "default",
        "randomColor": true,
        "background": "rgb(57,60,65)",
        "highlightColor": "#50C9CE",
        "marginH": 60,
        "marginV": 20,
        "contentStyle": {
          "lineHeight": "1.5",
          "fontSize": "16px"
        },
        "linkStyle": {
          "lineRadius": 5,
          "lineType": "curve",
          "lineWidth": "3px"
        },
        "rootTopic": {
          "contentStyle": {
            "fontSize": "36px"
          },
          "subLinkStyle": {
            "lineType": "curve",
            "lineWidth": "3px"
          }
        },
        "primaryTopic": {
          "contentStyle": {
            "fontSize": "24px"
          },
          "subLinkStyle": {
            "lineType": "curve",
            "lineWidth": "3px"
          }
        },
        "normalTopic": {
          "subLinkStyle": {
            "lineType": "curve",
            "lineWidth": "3px"
          }
        }
      }
    },
    "formatVersion": null
  });
}
