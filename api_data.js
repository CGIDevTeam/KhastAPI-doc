define({ "api": [
  {
    "type": "get",
    "url": "/v1/posts",
    "title": "Recuperation de tous les posts presents",
    "group": "Post",
    "name": "getAllPosts",
    "description": "<p>Recupere tous les posts sans disctinctions</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de l'utilisateur</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n{\n\"id\": \"5b02de5310e77a205cee87cc\",\n\"createdDate\": \"2018-05-21T16:00:00.000+0000\",\n\"event\": {\n    \"startDate\" : \"2018-05-22T18:00:00.000+0000\",\n    \"place\" : \"Minute Blonde\",\n    }\n},\n{\n\"id\": \"5b041db7f83b362d545bee0b\",\n\"createdDate\": \"2018-05-21T17:00:00.000+0000\",\n\"text\": {\n    \"text\" : \"Un super post avec que du texte\"\n    }\n}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/julien/juge/khast/api/controller/PostController.java",
    "groupTitle": "Post"
  },
  {
    "type": "post",
    "url": "/v1/posts",
    "title": "Sauvegarde d'un post",
    "group": "Post",
    "name": "savePost",
    "description": "<p>Permet de sauvegarder un post (event, text)</p>",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de l'utilisateur</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "createdDate",
            "description": "<p>Date de creation</p>"
          }
        ],
        "Text": [
          {
            "group": "Text",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Texte du post</p>"
          }
        ],
        "Event": [
          {
            "group": "Event",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>Date de debut de l'evenement</p>"
          },
          {
            "group": "Event",
            "type": "Date",
            "optional": true,
            "field": "endDate",
            "description": "<p>Date de fin de l'evenement</p>"
          },
          {
            "group": "Event",
            "type": "String",
            "optional": true,
            "field": "comment",
            "description": "<p>Commentaire de l'evenement</p>"
          },
          {
            "group": "Event",
            "type": "String",
            "optional": true,
            "field": "price",
            "description": "<p>Prix de l'evenement</p>"
          },
          {
            "group": "Event",
            "type": "String",
            "optional": false,
            "field": "place",
            "description": "<p>Emplacement de l'evenement</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"createdDate\": \"2018-05-22T18:00:00\",\n\"text\": {\n    \"text\": \"Un super post !!!!!!\"\n}\n}",
          "type": "json"
        },
        {
          "title": "Minimal-Event-Request-Example:",
          "content": "{\n\"createdDate\": \"2018-05-22T18:00:00\",\n\"event\": {\n    \"startDate\": \"2018-05-22T18:00:00\",\n    \"place\": \"Minute Blonde\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"success\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/main/java/com/julien/juge/khast/api/controller/PostController.java",
    "groupTitle": "Post"
  }
] });
