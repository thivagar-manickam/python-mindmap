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
    "focusKey": "f50dce09-3768-4921-95e9-36d3cd209833",
    "extData": {
      "TOPIC_REFERENCE": {
        "reference": {}
      }
    },
    "topics": [
      {
        "key": "0fe2c952-32f0-4158-be4e-41f167986ed4",
        "parentKey": "676ebb64-f661-4563-93cf-d82a9512524a",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Logical Operator"
          }
        ]
      },
      {
        "key": "965e0a40-6650-4279-9d1e-42dca9937c27",
        "parentKey": "448e595d-b770-48be-92fd-c459e581ccdf",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "tuple"
          },
          {
            "type": "DESC",
            "data": "**Tuple** is a collection of heterogenous objects much similar to that of the List.\n The paranthesis \\[ \\( \\) \\] are used to define/create a tuple. The items in the tuple are seperated by comma \\( , \\)\n Though it is not necessary, its always good to enclose the tuple object in \\( \\) while defining them. \n\n```python\n# Ways to create a tuple\n\na = (10, 20, '18') # General way of creating a tuple using ()\nprint(a) # will print (10, 20, '18')\n\n\"\"\" \nWhen using a tuple class we need to pass an iterable object from which the items will\nbe picked from\nIf we are passing a dictionary object to the tuple class then the keys are considered \nas the items to be added to the tuple\n\"\"\"\nb = tuple([10, 20, 23]) \n\n# When creating a tuple with a single element it is mandatory that \n# we append a comma (,) at the end so that python will interpret it as a tuple\n\nc = (10) # Here c will be of type int\nc = (10,)# Here c will be of type tuple\n\n```\n\n Tuples are immutable, meaning that once the tuple is defined we cannot modify it directly either by accessing the index or by any in build methods.\n\n Though a tuple is immutable we can modify them by converting it to list, making the changes to the list and then converting it back to a tuple.\n\n```python\n# Error with Item Assignment\nc = (10, 20, 30)\nc[2] = 40 # Will throw a TypeError as tuple does not support item assignment\n\n# Way to modify the elements of a tuple\nd = list(c) # converting tuple to a list\nd[2] = 40 # modifying the list\nc = tuple(d) # converting the modified list back to tuple\nprint(c)\n\n# Output\n(10,20,40)\n\n```\n\n**Identifying the type**\n```python\nprint(type(c)) # will print <class 'tuple'>\nprint(isinstance(c, tuple)) # will return true if c is of type tuple\n\n```\n"
          }
        ]
      },
      {
        "key": "9fae9162-23b2-4213-a107-185457281cbf",
        "parentKey": "c397fccb-1761-48ae-9051-d1b10926101f",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "insert/append"
          }
        ]
      },
      {
        "key": "009985f8-1429-48fc-a591-e60ab6a11475",
        "parentKey": "d27d71d0-d6bf-4e9f-a4c4-e0193fca2f62",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Slicing"
          }
        ]
      },
      {
        "key": "5867fc05-9be3-48c5-a662-be136244fcb1",
        "parentKey": "83dfa8ec-e56a-4b3a-a583-832497e10a20",
        "subKeys": [
          "7b44ff55-e4ec-4aea-b59c-0ceb757fafde",
          "d3bb1eb4-328c-4c64-a773-0cab8cdb095c"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Loops"
          }
        ]
      },
      {
        "key": "b6d15f09-cca9-4349-8940-11812fd16a0b",
        "parentKey": "83dfa8ec-e56a-4b3a-a583-832497e10a20",
        "subKeys": [
          "729ac350-b0f2-4c62-9f04-0065fbcf0b96",
          "231eb190-f016-4e64-b2fe-63a7c887b942",
          "333ed114-73e0-4a33-a03c-06cb94df3e3d",
          "cb8f9f23-1207-41bc-97d1-f15064f0eb76"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "File Handling"
          }
        ]
      },
      {
        "key": "448e595d-b770-48be-92fd-c459e581ccdf",
        "parentKey": "b7f00b7f-ee66-4b84-80f3-9f181d251fae",
        "subKeys": [
          "464cc83d-84fe-47d4-a2e8-064b5e3bcc15",
          "965e0a40-6650-4279-9d1e-42dca9937c27",
          "917b5cae-abc7-4e39-855e-76d8f00cacd9"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Sequence"
          }
        ]
      },
      {
        "key": "56c130f3-9ef8-4fa8-8676-03f90cb50e8b",
        "parentKey": "d27d71d0-d6bf-4e9f-a4c4-e0193fca2f62",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "capitalize"
          }
        ]
      },
      {
        "key": "06244fb7-257f-4eef-b7f4-2d180e7ad46d",
        "parentKey": "39c84334-c6b2-4d23-8afc-4706377804cf",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "float"
          },
          {
            "type": "DESC",
            "data": "Float are numbers which has decimal values. It can contain positive or negative numbers.\n\n### Defining Floating point variable\n\n```python\na = 10.32 # Directly assigning the value to a variable\nb = float(\"23\") # Using the float class to assign floating value\nc = float(100.32)\nd = float(\"22.32\") # Converting the string floating value\n\nprint(a) # will return 10.32\nprint(b) # will return 23.0\nprint(c) # will return 100.32\nprint(d) # will return 22.32\n\n```\n\nThe float\\(\\) function will try to convert the given string or number to a floating point value.\n\n### Identifying the type\n\n```python\nprint(type(a)) # will return <class 'float'>\nprint(isinstance(a, float)) # Will return True if 'a' is of type float\n\n```\n"
          }
        ]
      },
      {
        "key": "464cc83d-84fe-47d4-a2e8-064b5e3bcc15",
        "parentKey": "448e595d-b770-48be-92fd-c459e581ccdf",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "list"
          },
          {
            "type": "DESC",
            "data": "**List **is a heterogenous collection of different objects and is mutable in nature. \n They are similar to the arrays in other programming language and are much more flexible\n owing to the fact that multiple object types can be stored within a List.\n\n List are ordered in nature and their values can be retrieved based on their index. Also we can \n directly modify the value in a list by accessing it through its index and making the modifications.\n\n### Examples\n\n```python\na = [] # Empty list\nb = [12,'ryan',(23, 12)] # Multiple object types in a single list\n\na.append(12) # Add 12 as last element of the list\na.insert(1, 23) # Insert 23 at index position 1\na.pop() # Will remove the last element in the list\na.pop(index=2) # Will remove the element in the 2nd index position\n\nprint(b[0]) # will print the value in the 0th index position\n\n```\n\n### Identifying the type\n\n```python\nprint(type(a)) # return <class 'list'>\nprint(isinstance(a, list)) # return true if variable 'a' is of type list\n\n```\n"
          }
        ]
      },
      {
        "key": "7f17258a-e613-4bec-ac62-7820861d29c2",
        "parentKey": "b4bd5a6e-b0aa-482e-ab84-8ea642e1e7bd",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Constructors\nand\nDestructors"
          }
        ]
      },
      {
        "key": "4c9304ba-a37e-4b09-a213-5b0e2242a664",
        "parentKey": "d27d71d0-d6bf-4e9f-a4c4-e0193fca2f62",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "swapcase"
          }
        ]
      },
      {
        "key": "d4382eda-4c3f-4ed1-a0f7-a763dc224cbc",
        "parentKey": "b7f00b7f-ee66-4b84-80f3-9f181d251fae",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Set"
          },
          {
            "type": "DESC",
            "data": "Set is an heterogenous unordered collection of objects and does not allow duplicates to be present in it.\n\nUnlink other data types, Set does not have any index and hence their values cannot be modified directly after creation.\n\nA Set can be created either by using the **set **keyword or with the help of **\\{ \\} **\\(curly braces\\)\n\n**Creation of Set:**\n```python\n# Creation of set using curly braces\nset_1 = {1, 2, 3, 4, 5, 5, 10}\nprint(set_1)\n# Output\n1, 2, 3, 4, 5, 10\n\n# Creation of set using set keyword\nset_2 = set(1, 2, 3, 4, 5, 10)\nprint(set_1)\n# Output\n1, 2, 3, 4, 5, 10\n\n```\n\nAs we can see from the above example, even when a duplicate element is given in the declaraction, the Set eliminates the duplicate elements by retaining the first occuring values.\n\nSince the Set does not allow duplicates, it can be used as a quick hack to remove duplicate elements from a List. Also to make any changes to the Set, we can convert it to a list, make modifications in the list and then convert it back to a Set.\n\n**Identifying the type:**\n```python\nprint(type(set1)) # will print <class 'set'>\nprint(isinstance(set1, set)) # will return true if set1 is of type set\n\n```\n"
          }
        ]
      },
      {
        "key": "6356e49e-9c9c-4433-9825-7c0a73608cac",
        "parentKey": "83dfa8ec-e56a-4b3a-a583-832497e10a20",
        "subKeys": [
          "45cca340-9600-45c5-8dbf-5e0de52666d2",
          "5d6180cd-f5f0-4c34-9c23-bb4538c9ab8d",
          "be2c2ed0-4bff-4a83-bc48-fa4ee50353c9",
          "59a99b16-4a96-4aca-886f-2656fcd6b921"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Exceptions and \nException handling"
          }
        ]
      },
      {
        "key": "317fc5a2-03b7-4067-99da-81300930304f",
        "parentKey": "a3748e6a-c524-4dd6-9236-0d01df71924f",
        "subKeys": [
          "b4bd5a6e-b0aa-482e-ab84-8ea642e1e7bd",
          "fd23272c-cd7d-42bc-b1ee-4c179805026b"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Object Oriented \nProgramming"
          }
        ]
      },
      {
        "key": "a7eba28c-a6b9-426c-ba12-54c98c4ea30b",
        "parentKey": "83dfa8ec-e56a-4b3a-a583-832497e10a20",
        "subKeys": [
          "f27c0424-b690-460f-9778-3edf3fc11578",
          "3d564825-425c-4760-86e6-0597f883d77a",
          "4fa61e9e-c850-4cb1-9254-c8375bc5fea8"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Scopes"
          }
        ]
      },
      {
        "key": "e4abc4cc-6238-4d0b-92f4-56b940300d48",
        "parentKey": "4b4c7439-b41e-472e-b44c-9abf85b53d5d",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "append"
          }
        ]
      },
      {
        "key": "51f8afb4-66b2-4d3d-9d20-914771a2147e",
        "parentKey": "39c84334-c6b2-4d23-8afc-4706377804cf",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "complex"
          },
          {
            "type": "DESC",
            "data": "Complex numbers are represented using the **\\(real part\\) \\+ \\(imaginary part\\) \\* j**\nThe real and imaginary part can take both integer and floating point numbers.\n\n### Defining Complex number variable\n\n```python\na = 23 + 3j\nb = 21.32 + 3.1j\nc = complex(real=30, imag=2)\nd = complex(real=\"23\")\nprint(a) # will return (23+3j)\nprint(b) # will return (21.32+3.1j)\nprint(c) # will return (30+2j)\nprint(d) # will return (23+0j)\n\n```\n\n### Identifying the type\n\n```python\nprint(type(a)) # will return <class 'complex'>\nprint(isinstance(a, complex)) # Will return True if 'a' is of type complex\n\n```\n\n### Exception while defining complex number\n\n1. Only the character ' j ' can be used to represent the imaginary part. Using other characters will throw an invalid syntax error.\n\n```python\nd = 23 + 3i # will throw an invalid syntax error\n\n```\n 2\\. When using the complex\\(\\) definition, if the real param is passed as a string we cannot pass the\n```\n imag param. It will throw a type error.\n\n```\n```python\nd = complex(real=\"23\", imag=2) # will throw a type error\n\n```\n"
          }
        ]
      },
      {
        "key": "e87251b9-1da4-4270-9b34-05cdfe2822c4",
        "parentKey": "676ebb64-f661-4563-93cf-d82a9512524a",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Assignment Operator"
          }
        ]
      },
      {
        "key": "4f9282fa-387e-40e0-8c45-2fa707f55f8c",
        "parentKey": "0d294b23-1f70-4750-bc01-2f43478a49c2",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "elif statement"
          },
          {
            "type": "DESC",
            "data": "The **Elif** statement is also used along with the If statement. One minor issue with multiple If statment is that, irrespective of whether a condition is evaluted to** TRUE or FALSE**, all the If condition will be evaluated. This will lead to unnecessary condition checking and waste of resources.\n\nTo avoid this problem we use the **Elif** statement\\. As the name suggest, the condition of the Elif statement is evaluated only when the previous** If / Elif** condition fails. Once an Elif block is executed rest of the conditional statements in the block are ignored and proceed to next iteration. This reduces the number of condition checking need to be done.\n\n\n### Syntax:\n\n```python\nif(condition):\n    statement(s)\nelif(condition):\n    statement(s) # Executed when the If condition fails and elif condtion is success\nelse:\n    statement(s)\n\n```\n\n\n### Example:\n\n```python\n# Print value from 1 to 4\n# Pring * when i = 2 and print & when i = 3\nfor i in range(1, 5):\n    if(i == 2):\n        print('*')\n    elif(i == 3):\n        print('&')\n    else:\n        print(i)\n        \n# Output:\n# 1\n# *\n# &\n# 4\n\n```\n"
          }
        ]
      },
      {
        "key": "2f6d3be1-481f-424e-86b6-cf9cd30aabc8",
        "parentKey": "59a99b16-4a96-4aca-886f-2656fcd6b921",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Syntax error"
          }
        ]
      },
      {
        "key": "eb9702d4-e132-49ee-b988-7887b8abf3f7",
        "parentKey": "4b4c7439-b41e-472e-b44c-9abf85b53d5d",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "copy"
          }
        ]
      },
      {
        "key": "50a82345-69b4-4a18-9daa-9d77577edd02",
        "parentKey": "4b4c7439-b41e-472e-b44c-9abf85b53d5d",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "pop"
          }
        ]
      },
      {
        "key": "57c8e398-16ee-494a-ab2e-2980c38c102a",
        "parentKey": "d27d71d0-d6bf-4e9f-a4c4-e0193fca2f62",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "upper\nand\nlower"
          }
        ]
      },
      {
        "key": "59a99b16-4a96-4aca-886f-2656fcd6b921",
        "parentKey": "6356e49e-9c9c-4433-9825-7c0a73608cac",
        "subKeys": [
          "50a3e25c-598f-4c93-904e-18a0683bd03e",
          "2f6d3be1-481f-424e-86b6-cf9cd30aabc8",
          "918b10c8-7134-4a75-b7d2-6199257be2ec"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Errors"
          }
        ]
      },
      {
        "key": "b0afcd07-f107-4e27-a29b-6eb8e1c0f92a",
        "parentKey": "c397fccb-1761-48ae-9051-d1b10926101f",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "update"
          }
        ]
      },
      {
        "key": "3f0913dc-5f45-4f1e-8d60-f11edaf0c965",
        "parentKey": "d059c0ec-c3b0-47ce-82ba-838cd2f7eadb",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Generators"
          }
        ]
      },
      {
        "key": "7ee4332b-6ccd-4056-84e8-423176495d8b",
        "parentKey": "83dfa8ec-e56a-4b3a-a583-832497e10a20",
        "subKeys": [
          "d27d71d0-d6bf-4e9f-a4c4-e0193fca2f62",
          "4b4c7439-b41e-472e-b44c-9abf85b53d5d",
          "c397fccb-1761-48ae-9051-d1b10926101f",
          "0423f379-b1b7-4744-84ab-62e9c5cc7ae9"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Data\nManipulation"
          }
        ]
      },
      {
        "key": "3570aa82-1056-4394-8d4d-786529f53550",
        "parentKey": "0423f379-b1b7-4744-84ab-62e9c5cc7ae9",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "intersection"
          }
        ]
      },
      {
        "key": "f27c0424-b690-460f-9778-3edf3fc11578",
        "parentKey": "a7eba28c-a6b9-426c-ba12-54c98c4ea30b",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Function\nScope"
          }
        ]
      },
      {
        "key": "8269c50f-7768-42d0-b1f8-c28fd94f18b2",
        "parentKey": "d059c0ec-c3b0-47ce-82ba-838cd2f7eadb",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Recursion"
          }
        ]
      },
      {
        "key": "c3bd767e-dca7-4e52-bc73-5d8f0fb1e1ec",
        "parentKey": "676ebb64-f661-4563-93cf-d82a9512524a",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Identity Operator"
          }
        ]
      },
      {
        "key": "b7f00b7f-ee66-4b84-80f3-9f181d251fae",
        "parentKey": "83dfa8ec-e56a-4b3a-a583-832497e10a20",
        "subKeys": [
          "39c84334-c6b2-4d23-8afc-4706377804cf",
          "8a707957-99ea-437c-ba2f-6d1d23ac6e88",
          "448e595d-b770-48be-92fd-c459e581ccdf",
          "f5c3c049-5eb9-4b00-892c-4eaea31aa051",
          "d4382eda-4c3f-4ed1-a0f7-a763dc224cbc",
          "a434cb36-9bd3-4e06-bdca-5e587b112afa",
          "9af33793-4841-4ef4-93b2-bbe931da1034"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Data types"
          }
        ]
      },
      {
        "key": "3d564825-425c-4760-86e6-0597f883d77a",
        "parentKey": "a7eba28c-a6b9-426c-ba12-54c98c4ea30b",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Local \nScope"
          }
        ]
      },
      {
        "key": "d059c0ec-c3b0-47ce-82ba-838cd2f7eadb",
        "parentKey": "a3748e6a-c524-4dd6-9236-0d01df71924f",
        "subKeys": [
          "da27a4e8-11ed-4498-b7a7-39b07effe954",
          "8269c50f-7768-42d0-b1f8-c28fd94f18b2",
          "3f0913dc-5f45-4f1e-8d60-f11edaf0c965"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Functional\nProgramming"
          }
        ]
      },
      {
        "key": "f5c3c049-5eb9-4b00-892c-4eaea31aa051",
        "parentKey": "b7f00b7f-ee66-4b84-80f3-9f181d251fae",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Dictionary"
          },
          {
            "type": "DESC",
            "data": "**Dictionary **is a collection of ordered \\( as of Python 3.7, dictionaries are ordered. In the previous\n versions dictionaries are un\\-ordered \\), mutable and non\\-duplicate objects.\n The data are stored as **key:value** pairs in the dictionary, where the key can be of any immutable\n object and unique, whereas the value can be of any data type and duplicate as well.\n\n The curly braces \\( \\{ \\} \\) are used to denote a dictionary, where each key\\-value pair are separated by \n colon \\( : \\) and each key is separated by comma \\( , \\)\n\n Dictionary keys are case sensitive; same key with different cases of key are treated differently.\n\n### Example\n\n```python\nnew_dict = {} # Empty Dictionary\n\ndict2 = {'name': 'ryan', 'age', 24} # defining dict with default values\n\nnew_dict['name'] = 'Riya' # Will add the key-value to dict if not present else update the value\nnew_dict.setdefault('age', 24) # will add the key-value to dict if not present, else return the value\n\nprint(new_dict['name']) # accessing the name using array indexing method\n# Output - Riya\n\n```\n\n **Identifying the type**\n```python\nprint(type(new_dict)) # will print <class 'dict'>\nprint(isinstance(new_dict, dict)) # will return true if new_dict is of type dict\n\n```\n"
          }
        ]
      },
      {
        "key": "231eb190-f016-4e64-b2fe-63a7c887b942",
        "parentKey": "b6d15f09-cca9-4349-8940-11812fd16a0b",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "File Read"
          }
        ]
      },
      {
        "key": "9cdc6fe2-8b6c-4181-8352-ac0642705431",
        "parentKey": "0d294b23-1f70-4750-bc01-2f43478a49c2",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "continue"
          },
          {
            "type": "DESC",
            "data": "**Continue** statement is a loop control statement, that forces the program to terminate the current iteration and proceed with the next iteration.\n\nThe **Continue** statement can be used in both for and while loops.\n\nWhen the Continue statement is encountered inside the loop, any code blow after the statement is skipped and the loop control goes to the next iteration.\n\nExample of Continue statement in for loop:\n```python\n# Program to print numbers from 1 to 5 skipping 3\nfor i in range(1, 6):\n    if(i == 3):\n        continue\n    else:\n        print(i)\n\n#Output\n# 1\n# 2\n# 4\n# 5\n\n# Explanation - When the value of i is 3, inside of print the value, it skips the iteration and \n# moves to the next iteration\n\n```\n"
          }
        ]
      },
      {
        "key": "95364fba-fad5-42e6-8aba-48eddfd9c85d",
        "parentKey": "0d294b23-1f70-4750-bc01-2f43478a49c2",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "If statment"
          },
          {
            "type": "DESC",
            "data": "**If** statement is used to make decision on what needs to be done when certain condition is met.\n\nThe **If** statement contains a logical expression using which data is compared and a decision is made based on the result of the comparison.\n\n\n### Syntax:\n\n```python\nif(expression):\n    statement to be executed\n\n```\n\nThe **If** statement can be used in loops, comprehension functions \\(List comprehension\\), class definitions and functions. \nThe expression given as part of the if statement should always evaluate to a boolean value.\n\n**If** the value is **TRUE**, then the statement\\(s\\) with in the if block is executed; if the value is **FALSE**, the code immediately after the end of If statement\\(s\\)\nis executed.\n\n\n### Example \\- If condition inside a for loop\n\n```python\n# Print a statment to console only when value of i is 3\nfor i in range(1, 6):\n    if(i == 3): # This is a condition check to see if the value of i is 3\n        print(\"i value is equal to 3\")\n        \n# Output:\n# i value is equal to 3\n\n```\n\nIt is possible to have multiple If conditions within a loop  or functions. When there is multiple If condition, each condition is evaluated based on the\nexpression and then execute the block for which the condition evaluates to TRUE.\n\n\n### Example \\- Multiple If conditions:\n\n```python\n# Program to print statement to console when the value of i is 3 and 4\nfor i in range(1, 6):\n    if(i == 3):\n        print('i value is 3')\n    if(i == 4):\n        print('i value is 4')\n        \n# Output\n# i value is 3\n# i value is 4\n\n```\n"
          }
        ]
      },
      {
        "key": "7d5e4c2a-93af-4d0f-b643-0ddbd41316e6",
        "parentKey": "fd23272c-cd7d-42bc-b1ee-4c179805026b",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Abstraction"
          }
        ]
      },
      {
        "key": "4fa61e9e-c850-4cb1-9254-c8375bc5fea8",
        "parentKey": "a7eba28c-a6b9-426c-ba12-54c98c4ea30b",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Global\nScope"
          }
        ]
      },
      {
        "key": "0d294b23-1f70-4750-bc01-2f43478a49c2",
        "parentKey": "83dfa8ec-e56a-4b3a-a583-832497e10a20",
        "subKeys": [
          "95364fba-fad5-42e6-8aba-48eddfd9c85d",
          "92d73690-42f0-46fb-9ed6-01b11dd5b6c7",
          "4f9282fa-387e-40e0-8c45-2fa707f55f8c",
          "88e71315-84d5-424c-9d0d-debc96be9275",
          "9cdc6fe2-8b6c-4181-8352-ac0642705431",
          "f2e6836b-f3a3-4b57-9539-ceafb2b90d78"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Control/Condition\nStatements"
          }
        ]
      },
      {
        "key": "4b4c7439-b41e-472e-b44c-9abf85b53d5d",
        "parentKey": "7ee4332b-6ccd-4056-84e8-423176495d8b",
        "subKeys": [
          "e4abc4cc-6238-4d0b-92f4-56b940300d48",
          "d4f73f1a-1ced-4832-9e06-3c5ced5029d5",
          "64d71625-7236-47d6-965f-74bf03c600ba",
          "50a82345-69b4-4a18-9daa-9d77577edd02",
          "5ce1b8c5-a91b-422d-afbf-fe718ed99ce8",
          "f26977cb-9329-42e9-ad18-0bdef2d1458b",
          "eb9702d4-e132-49ee-b988-7887b8abf3f7"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "List"
          }
        ]
      },
      {
        "key": "f50dce09-3768-4921-95e9-36d3cd209833",
        "parentKey": "d27d71d0-d6bf-4e9f-a4c4-e0193fca2f62",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "split"
          },
          {
            "type": "DESC",
            "data": "The **string\\.split\\(\\)** function is used to split the given large string into a list of strings based on the separator given.\n\n### Syntax:\n\n```python\nstring.split(separator, maxsplit)\n\n# separator - Optional. Specifies the separator to be used for splitting. By default\n# the whitespaces(\" \") is considered as the separator\n\n# maxsplit - Optional.  Specifies how many splits to do. \n# Default value is -1, which is \"all occurrences\"\n\n```\n\n### Example 1 \\- With only the separator mentioned\n\n```python\ntext = \"I_love_to_read_books\"\n\narr = text.split(\"_\");\n\nprint(arr)\n\n# Output\n['I', 'love', 'to', 'read', 'books']\n\n```\n\n### Example 2 \\- With both separator and maxsplit\n\n```python\ntext = \"I_love_to_read_books\"\n\narr = text.split(\"_\", 2);\n\nprint(arr)\n\n# Output\n['I', 'love', 'to_read_books']\n\n```\n"
          }
        ]
      },
      {
        "key": "51771cee-0f63-4963-98b4-83ce9cf1500c",
        "parentKey": "9b11cbc1-7555-4fef-8ac1-9f4c29087b8e",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Funtion/Definition"
          }
        ]
      },
      {
        "key": "f26977cb-9329-42e9-ad18-0bdef2d1458b",
        "parentKey": "4b4c7439-b41e-472e-b44c-9abf85b53d5d",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "clear"
          }
        ]
      },
      {
        "key": "7b44ff55-e4ec-4aea-b59c-0ceb757fafde",
        "parentKey": "5867fc05-9be3-48c5-a662-be136244fcb1",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "for loop"
          }
        ]
      },
      {
        "key": "dac0c9d3-bc2a-405c-8c00-04eadc183804",
        "parentKey": "676ebb64-f661-4563-93cf-d82a9512524a",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Comparison Operator"
          }
        ]
      },
      {
        "key": "113c36f1-6113-420e-95b2-6538d85591d9",
        "parentKey": "c397fccb-1761-48ae-9051-d1b10926101f",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "pop"
          }
        ]
      },
      {
        "key": "676ebb64-f661-4563-93cf-d82a9512524a",
        "parentKey": "83dfa8ec-e56a-4b3a-a583-832497e10a20",
        "subKeys": [
          "e007ccab-6e73-43fc-9133-f41f91cad209",
          "dac0c9d3-bc2a-405c-8c00-04eadc183804",
          "0fe2c952-32f0-4158-be4e-41f167986ed4",
          "eac69c95-909c-485f-a4d0-ab5d051fb62f",
          "e87251b9-1da4-4270-9b34-05cdfe2822c4",
          "c3bd767e-dca7-4e52-bc73-5d8f0fb1e1ec",
          "440faeb4-6fb6-42c9-bb9d-b3fa62303db8",
          "a2f701f3-257e-483d-8a6b-5b74ac1e48d0"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Operators"
          }
        ]
      },
      {
        "key": "333ed114-73e0-4a33-a03c-06cb94df3e3d",
        "parentKey": "b6d15f09-cca9-4349-8940-11812fd16a0b",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "File Write"
          }
        ]
      },
      {
        "key": "ec791990-e208-468d-a3ed-49b6db5a829d",
        "parentKey": "0423f379-b1b7-4744-84ab-62e9c5cc7ae9",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "add"
          }
        ]
      },
      {
        "key": "62f8baec-2339-4c0b-b046-6faf3dda11a8",
        "parentKey": "9b11cbc1-7555-4fef-8ac1-9f4c29087b8e",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Decorators"
          }
        ]
      },
      {
        "key": "a2f701f3-257e-483d-8a6b-5b74ac1e48d0",
        "parentKey": "676ebb64-f661-4563-93cf-d82a9512524a",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Ternary Operator"
          }
        ]
      },
      {
        "key": "6692da9c-cbcb-4f08-8ff5-1aabf9851dfb",
        "parentKey": "fd23272c-cd7d-42bc-b1ee-4c179805026b",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Inheritance"
          }
        ]
      },
      {
        "key": "83b824cd-4b63-48d8-91ac-c8f17663b1da",
        "parentKey": "0423f379-b1b7-4744-84ab-62e9c5cc7ae9",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "pop"
          }
        ]
      },
      {
        "key": "cb8f9f23-1207-41bc-97d1-f15064f0eb76",
        "parentKey": "b6d15f09-cca9-4349-8940-11812fd16a0b",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "File Append"
          }
        ]
      },
      {
        "key": "917b5cae-abc7-4e39-855e-76d8f00cacd9",
        "parentKey": "448e595d-b770-48be-92fd-c459e581ccdf",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "range"
          },
          {
            "type": "DESC",
            "data": "Python **range\\(\\)** function returns the sequence of the given number between the given range.\n\nThe range\\(\\) function takes three params: \n```none\nrange(start, stop, step)\n\nstart - specifies the starting value and defaults to 0 if not mentioned\nstop - specifies until which value the sequence should be generated. stop is mandatory param\nstep - specifies what will be the increment or decrement value for the generated sequence.\n\n```\n\nThe range\\(\\) function will generate a sequence from **start **_to _**stop \\- 1 **value with the increment or decrement based on the step value.\nThe Default value for the start and step is 0 and 1 respectively. When only one value is passed to the range\\(\\) it is considered as the stop value and the default start and stop value is applied.\n\n**Creating a range function:**\n```python\nrange(10) # Will generate a sequence from 0 to 9 with an increment value of 1\n\nrange(10, 20, 1) # will generate sequence from 10 to 19 with an increment of 1\n\nrange(20, 10, -1) # Will generate a sequence from 20 to 11 with a decrement value of 1\n\n```\n\nThe range\\(\\) function is predominantly used in the the loops to iterate through a list or just to print a sequence of numbers.\n```python\n#Printing numbers from 1 to 4\nfor i in range(1,5):\n    print(i) # Will print the values 1, 2, 3, 4\n\n#Used to generate the index value of the list object\nnew_list = [10, 20, 30, 40]\nfor i in range(len(new_list)):\n    print(new_list[i]) # Will print the value 10, 20, 30, 40\n\n```\nIn the above for loop, range is used to generate the index value which can be used to access data from the list"
          }
        ]
      },
      {
        "key": "da27a4e8-11ed-4498-b7a7-39b07effe954",
        "parentKey": "d059c0ec-c3b0-47ce-82ba-838cd2f7eadb",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "First class \nfunctions"
          }
        ]
      },
      {
        "key": "015d562d-ef8b-4d18-a422-897aef583e0e",
        "parentKey": "d27d71d0-d6bf-4e9f-a4c4-e0193fca2f62",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "replace"
          }
        ]
      },
      {
        "key": "deb9533b-4bcd-4e6e-98f8-3f361c8e95fb",
        "parentKey": "d27d71d0-d6bf-4e9f-a4c4-e0193fca2f62",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "title"
          }
        ]
      },
      {
        "key": "88e71315-84d5-424c-9d0d-debc96be9275",
        "parentKey": "0d294b23-1f70-4750-bc01-2f43478a49c2",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "break"
          },
          {
            "type": "DESC",
            "data": "**break** is used to bring the control out of the loop and inner most loop \\(in case of nested loops\\) when a certain condition is met.\n\nbreak statement is mostly given inside a conditional statement \\(if, elif \\) within the loop, to exit the loop when the condition is statisfied.\n\n**Example of using the break statement:**\n```python\nfor value in 'Hello':\n    if value == 'l':\n        break # Will break out of the loop as soon as character 'l' is encountered \n    else:\n        print(f'The character printed is: {value}')\n        \n# Output\n# The character printed is: H\n# The character printed is: e\n\n```\n\n**Example of using a break statement inside a nested loop:**\n```python\nfor value in 'He':\n    for num in range(0, 3):\n        if num == 1:\n            break # This will break out of the inner most loop\n        \n        else:\n            print(f'The character and num printed is: {value} and {num}')\n            \n# Output:\n# The character and num printed is: H and 0\n# The character and num printed is: e and 0\n\n```\n"
          }
        ]
      },
      {
        "key": "f5722c80-7f2a-4919-8958-b69bcfc16d70",
        "parentKey": "c397fccb-1761-48ae-9051-d1b10926101f",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "setdefault"
          }
        ]
      },
      {
        "key": "bf5e4dcc-41e2-45e3-9b20-abf2d1cfced7",
        "parentKey": "39c84334-c6b2-4d23-8afc-4706377804cf",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "integer"
          },
          {
            "type": "DESC",
            "data": "Integers are whole numbers with no decimal points or fractional parts. It can contain positive or negative numbers.\nThere is no limit in how long a number can be in Python.\n\n### Defining Integer variable\n\n```python\na = 10 # Directly assigning the value to a variable\nb = int(\"23\") # Using the int class to assign integer value\nc = int(100.32) #This will omit the decimal value and store 100 in 'c'\nd = int('0b100', base=0) # Converting the string to base 0 number\n\nprint(a) # will return 10\nprint(b) # will return 23. The string gets converted to base 10 number\nprint(c) # will return 100\nprint(d) # will return 4 which is equaivalent of '0b100' in base 0\n\n```\n\nWhen using the int\\(\\) function, if the base param is mentioned, then the we must pass the number\nas a string. By default the base param value is 10.\n\n### Identifying the type\n\n```python\nprint(type(a)) # will return <class 'int'>\nprint(isinstance(a, int)) # Will return True if 'a' is of type int\n\n```\n"
          }
        ]
      },
      {
        "key": "5fd50f3b-4100-43b6-aeef-6d8e7394428d",
        "parentKey": "d27d71d0-d6bf-4e9f-a4c4-e0193fca2f62",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "join"
          }
        ]
      },
      {
        "key": "d4f73f1a-1ced-4832-9e06-3c5ced5029d5",
        "parentKey": "4b4c7439-b41e-472e-b44c-9abf85b53d5d",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "insert"
          }
        ]
      },
      {
        "key": "8a707957-99ea-437c-ba2f-6d1d23ac6e88",
        "parentKey": "b7f00b7f-ee66-4b84-80f3-9f181d251fae",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Text/String"
          },
          {
            "type": "DESC",
            "data": "**Strings** are arrays of bytes representing Unicode characters.\n\nA string is a collection of one or more characters put in a single quote, double\\-quote or triple quote.  In python there is no character data type, a character is a string of length one. It is represented by str class.\n\n### Defining a String\n\n```python\na = 'ryan'\nb = \"alice\"\nc = str(10)\nprint(a) # will print 'ryan'\nprint(b) # will print \"alice\"\nprint(c) # will print '10'\n\n```\nWhen using the str class, whatever is passed as the object will be considered as a single string.\n\nIn order to either use the double\\-quote or single quote within the string, you either use the alternative\nquote for enclosing the entire string or use the escape sequence.\n```python\nc = \"Ryan's bestfriend is David\" # Using the \"\" as enclosing quotes\nd = 'Ryan\\'s bestfriend is David'# Using \\' to print ' in the string\nprint(c) # Ryan's bestfriend is David\npring(d) # Ryan's bestfriend is David\n\n```\n\n### Doc String\n\nThe single quote and double strings will allow us to define a single line string only until we use \\\\ or \\\\n\\\\ to break it down to multiple lines. \nTo ease this problem, we have something called as Doc String or the triple quote in python.\nThe triple quote will preserve all the space and escape sequences without explicitly mentioning them.\nWe can either use three singe quotes or three double quotes to convert it into a doc string.\n\n```python\na = 'This \\n\\\nis a \\n\\\nnice book'\nprint(a) # here we have used the \\n\\ to split the lines\n\nb = '''This\nis a \nnice book'''\nprint(b) # The Doc string will preserve all the spaces\n\n#Output for both print statement will be:\n# This\n# is a\n# nice book\n\n```\n\n### Identifying the type\n\n```python\nprint(type(a)) # will return <class 'str'>\nprint(isinstance(a, str)) # Will return True if 'a' is of type str\n\n```\n"
          }
        ]
      },
      {
        "key": "a3748e6a-c524-4dd6-9236-0d01df71924f",
        "parentKey": "83dfa8ec-e56a-4b3a-a583-832497e10a20",
        "subKeys": [
          "d059c0ec-c3b0-47ce-82ba-838cd2f7eadb",
          "317fc5a2-03b7-4067-99da-81300930304f"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Programming\nParadigms"
          }
        ]
      },
      {
        "key": "30253742-3440-4ecc-a490-2036cedc8d50",
        "parentKey": "fd23272c-cd7d-42bc-b1ee-4c179805026b",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Polymorphism"
          }
        ]
      },
      {
        "key": "61b38167-95e0-4927-abff-2726838aab11",
        "parentKey": "0423f379-b1b7-4744-84ab-62e9c5cc7ae9",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "symmetric_difference"
          }
        ]
      },
      {
        "key": "9af33793-4841-4ef4-93b2-bbe931da1034",
        "parentKey": "b7f00b7f-ee66-4b84-80f3-9f181d251fae",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Binary"
          }
        ]
      },
      {
        "key": "f2e6836b-f3a3-4b57-9539-ceafb2b90d78",
        "parentKey": "0d294b23-1f70-4750-bc01-2f43478a49c2",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "pass"
          },
          {
            "type": "DESC",
            "data": "**Pass statement **is used as a placeholder value for future code. It is also referred to as a null statement.\n\nThe difference between a pass and a comment is that, a comment is ignored by the interpreter whereas the pass command\nis not ignored by the interpreter.\n\nWe cannot have an empty code within the for loop, function definition, class definition or in conditional statements. To avoid the\nerror we get when the code block is empty, we use the pass statement.\n\n**Example of using pass statement:**\n\n```python\n# Using a pass statement in if condition\na = 10\nb = 20\nif a > b:\n    pass\nelse:\n    print(a)\n\n```\n\n```python\n# Using a pass statement in function definition\ndef python_function:\n    pass\n\n```\n\n```python\n# Using a pass statement in class definition\nclass python_class:\n    pass\n\n```\n\n```python\n# Using a pass statement in a for loop\nfor i in range(0, 10):\n    pass\n\n```\n"
          }
        ]
      },
      {
        "key": "0423f379-b1b7-4744-84ab-62e9c5cc7ae9",
        "parentKey": "7ee4332b-6ccd-4056-84e8-423176495d8b",
        "subKeys": [
          "ec791990-e208-468d-a3ed-49b6db5a829d",
          "83b824cd-4b63-48d8-91ac-c8f17663b1da",
          "d33b5f19-a2ee-446e-89d2-888424a7cd43",
          "48e11f8b-eba6-4893-a20f-67768c5a997d",
          "3570aa82-1056-4394-8d4d-786529f53550",
          "61b38167-95e0-4927-abff-2726838aab11"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Set"
          }
        ]
      },
      {
        "key": "9b11cbc1-7555-4fef-8ac1-9f4c29087b8e",
        "parentKey": "83dfa8ec-e56a-4b3a-a583-832497e10a20",
        "subKeys": [
          "51771cee-0f63-4963-98b4-83ce9cf1500c",
          "5020c7bb-16ff-4e56-af25-132392e43be7",
          "1af5575f-fde9-4f0c-8b08-7946b1378eab",
          "62f8baec-2339-4c0b-b046-6faf3dda11a8"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Functions"
          }
        ]
      },
      {
        "key": "918b10c8-7134-4a75-b7d2-6199257be2ec",
        "parentKey": "59a99b16-4a96-4aca-886f-2656fcd6b921",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Built-in error"
          }
        ]
      },
      {
        "key": "39c84334-c6b2-4d23-8afc-4706377804cf",
        "parentKey": "b7f00b7f-ee66-4b84-80f3-9f181d251fae",
        "subKeys": [
          "bf5e4dcc-41e2-45e3-9b20-abf2d1cfced7",
          "06244fb7-257f-4eef-b7f4-2d180e7ad46d",
          "51f8afb4-66b2-4d3d-9d20-914771a2147e"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Numeric"
          },
          {
            "type": "DESC",
            "data": "The Numeric type in python includes the below three types:\n1. Integer\n1. Floating point numbers\n1. Complex numbers\n\n"
          }
        ]
      },
      {
        "key": "5ce1b8c5-a91b-422d-afbf-fe718ed99ce8",
        "parentKey": "4b4c7439-b41e-472e-b44c-9abf85b53d5d",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "remove"
          }
        ]
      },
      {
        "key": "c97307ee-9bd1-43b6-9b89-77493dfde29d",
        "parentKey": "d27d71d0-d6bf-4e9f-a4c4-e0193fca2f62",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "find"
          }
        ]
      },
      {
        "key": "64d71625-7236-47d6-965f-74bf03c600ba",
        "parentKey": "4b4c7439-b41e-472e-b44c-9abf85b53d5d",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "extend"
          }
        ]
      },
      {
        "key": "1af5575f-fde9-4f0c-8b08-7946b1378eab",
        "parentKey": "9b11cbc1-7555-4fef-8ac1-9f4c29087b8e",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Lambda"
          }
        ]
      },
      {
        "key": "48e11f8b-eba6-4893-a20f-67768c5a997d",
        "parentKey": "0423f379-b1b7-4744-84ab-62e9c5cc7ae9",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "union"
          }
        ]
      },
      {
        "key": "a2c951b8-8249-4fad-b559-150b6050395d",
        "parentKey": "b4bd5a6e-b0aa-482e-ab84-8ea642e1e7bd",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Classes, Objects\nand Methods"
          }
        ]
      },
      {
        "key": "5d6180cd-f5f0-4c34-9c23-bb4538c9ab8d",
        "parentKey": "6356e49e-9c9c-4433-9825-7c0a73608cac",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "finally"
          }
        ]
      },
      {
        "key": "d27d71d0-d6bf-4e9f-a4c4-e0193fca2f62",
        "parentKey": "7ee4332b-6ccd-4056-84e8-423176495d8b",
        "subKeys": [
          "009985f8-1429-48fc-a591-e60ab6a11475",
          "015d562d-ef8b-4d18-a422-897aef583e0e",
          "f50dce09-3768-4921-95e9-36d3cd209833",
          "5fd50f3b-4100-43b6-aeef-6d8e7394428d",
          "c97307ee-9bd1-43b6-9b89-77493dfde29d",
          "57c8e398-16ee-494a-ab2e-2980c38c102a",
          "56c130f3-9ef8-4fa8-8676-03f90cb50e8b",
          "deb9533b-4bcd-4e6e-98f8-3f361c8e95fb",
          "4c9304ba-a37e-4b09-a213-5b0e2242a664"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "String"
          }
        ]
      },
      {
        "key": "d33b5f19-a2ee-446e-89d2-888424a7cd43",
        "parentKey": "0423f379-b1b7-4744-84ab-62e9c5cc7ae9",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "remove"
          }
        ]
      },
      {
        "key": "d3bb1eb4-328c-4c64-a773-0cab8cdb095c",
        "parentKey": "5867fc05-9be3-48c5-a662-be136244fcb1",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "while loop"
          }
        ]
      },
      {
        "key": "83dfa8ec-e56a-4b3a-a583-832497e10a20",
        "parentKey": null,
        "subKeys": [
          "b7f00b7f-ee66-4b84-80f3-9f181d251fae",
          "676ebb64-f661-4563-93cf-d82a9512524a",
          "0d294b23-1f70-4750-bc01-2f43478a49c2",
          "5867fc05-9be3-48c5-a662-be136244fcb1",
          "6356e49e-9c9c-4433-9825-7c0a73608cac",
          "a3748e6a-c524-4dd6-9236-0d01df71924f",
          "a7eba28c-a6b9-426c-ba12-54c98c4ea30b",
          "9b11cbc1-7555-4fef-8ac1-9f4c29087b8e",
          "7ee4332b-6ccd-4056-84e8-423176495d8b",
          "b6d15f09-cca9-4349-8940-11812fd16a0b"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Python"
          }
        ]
      },
      {
        "key": "92d73690-42f0-46fb-9ed6-01b11dd5b6c7",
        "parentKey": "0d294b23-1f70-4750-bc01-2f43478a49c2",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "else statement"
          },
          {
            "type": "DESC",
            "data": "**Else** statement is used as a default statment. It is always used along with a If statment and cannot be used as a standalone statement.\n\nThere can be only one **Else** clause for an If statment. Proper indendations needs to be done when nested If else conditons are used.\n\nThe **Else** clause is executed when its matching If condition fails.\n\n\n### Syntax:\n\n```python\nif(condition):\n    statement(s)\nelse:\n    statement(s) # Executed when the if condition evaluates to TRUE\n\n```\n\n\n### Example:\n\n```python\n# Program to print number from 1 to 5 with 3 being replaced with a *\nfor i in range(1, 6):\n    if(i == 3):\n        print(\"*\")\n    else:\n        print(i) # Will print the i value if i != 3\n        \n# Output\n# 1\n# 2\n# *\n# 4\n# 5\n\n```\n"
          }
        ]
      },
      {
        "key": "b4bd5a6e-b0aa-482e-ab84-8ea642e1e7bd",
        "parentKey": "317fc5a2-03b7-4067-99da-81300930304f",
        "subKeys": [
          "a2c951b8-8249-4fad-b559-150b6050395d",
          "7f17258a-e613-4bec-ac62-7820861d29c2"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Building \nBlocks"
          }
        ]
      },
      {
        "key": "729ac350-b0f2-4c62-9f04-0065fbcf0b96",
        "parentKey": "b6d15f09-cca9-4349-8940-11812fd16a0b",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "File Open"
          }
        ]
      },
      {
        "key": "c397fccb-1761-48ae-9051-d1b10926101f",
        "parentKey": "7ee4332b-6ccd-4056-84e8-423176495d8b",
        "subKeys": [
          "9fae9162-23b2-4213-a107-185457281cbf",
          "113c36f1-6113-420e-95b2-6538d85591d9",
          "f5722c80-7f2a-4919-8958-b69bcfc16d70",
          "b0afcd07-f107-4e27-a29b-6eb8e1c0f92a"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Dict"
          }
        ]
      },
      {
        "key": "be2c2ed0-4bff-4a83-bc48-fa4ee50353c9",
        "parentKey": "6356e49e-9c9c-4433-9825-7c0a73608cac",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "raise"
          }
        ]
      },
      {
        "key": "45cca340-9600-45c5-8dbf-5e0de52666d2",
        "parentKey": "6356e49e-9c9c-4433-9825-7c0a73608cac",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "try/except"
          }
        ]
      },
      {
        "key": "e007ccab-6e73-43fc-9133-f41f91cad209",
        "parentKey": "676ebb64-f661-4563-93cf-d82a9512524a",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Arithmetic Operator"
          }
        ]
      },
      {
        "key": "eac69c95-909c-485f-a4d0-ab5d051fb62f",
        "parentKey": "676ebb64-f661-4563-93cf-d82a9512524a",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Bitwise Operator"
          }
        ]
      },
      {
        "key": "50a3e25c-598f-4c93-904e-18a0683bd03e",
        "parentKey": "59a99b16-4a96-4aca-886f-2656fcd6b921",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Logical error"
          }
        ]
      },
      {
        "key": "440faeb4-6fb6-42c9-bb9d-b3fa62303db8",
        "parentKey": "676ebb64-f661-4563-93cf-d82a9512524a",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Membership Operator"
          }
        ]
      },
      {
        "key": "a434cb36-9bd3-4e06-bdca-5e587b112afa",
        "parentKey": "b7f00b7f-ee66-4b84-80f3-9f181d251fae",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Boolean"
          },
          {
            "type": "DESC",
            "data": "**Boolean** data type has only two values \\- **True** or **False\\.**\nBoolean object that are equal to True are truthy and boolean object that are equal to False\nare falsy.\n\nNon \\- boolean objects can be used to determine true or false. All the conditional statements\nevaluate to either Boolean True or False.\n\nIn Python, True or False with capital 'T' and 'F' are valid. Using 't' or 'f' will throw an error.\n```python\na = True\nb = False\nc = bool(10) # True\nd = bool(0) # False\ne = bool([]) # False\nf = bool('a') # True\nprint(a) # will output True\nprint(b) # will output False\n\n```\nWhen using the **bool** function any value passed other than 0, empty string, list, dictionary, set or \ntuple will be considered as True. 0 and empty string, list, dictionary, set or tuple will be considered\nas False.\n\nUsing Non \\- boolean object to be evaluated to True or False:\n```python\nc = 5 > 2 # Will assing True if condition pass else assign False\nprint(c) # will output True\n\n```\n\n\n### Identifying the type\n\n```python\nprint(type(a)) # will return <class 'bool'>\nprint(isinstance(a, bool)) # Will return True if 'a' is of type bool\nprint(isinstance(a, int))\n\n```\n\nSince bool class is a subclass of int class, isinstance\\(a, int\\) will return True as well."
          }
        ]
      },
      {
        "key": "fd23272c-cd7d-42bc-b1ee-4c179805026b",
        "parentKey": "317fc5a2-03b7-4067-99da-81300930304f",
        "subKeys": [
          "6692da9c-cbcb-4f08-8ff5-1aabf9851dfb",
          "30253742-3440-4ecc-a490-2036cedc8d50",
          "49a58005-96d3-4c75-a383-e0de37e325a4",
          "7d5e4c2a-93af-4d0f-b643-0ddbd41316e6"
        ],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Pillars"
          }
        ]
      },
      {
        "key": "49a58005-96d3-4c75-a383-e0de37e325a4",
        "parentKey": "fd23272c-cd7d-42bc-b1ee-4c179805026b",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Encapsulation"
          }
        ]
      },
      {
        "key": "5020c7bb-16ff-4e56-af25-132392e43be7",
        "parentKey": "9b11cbc1-7555-4fef-8ac1-9f4c29087b8e",
        "subKeys": [],
        "collapse": false,
        "style": null,
        "blocks": [
          {
            "type": "CONTENT",
            "data": "Rules"
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
    "formatVersion": "0.0"
  });
}
