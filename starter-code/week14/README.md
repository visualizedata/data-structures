# Final Project One

### [App](https://newaa-aaronxhill.c9users.io/)

### Contents of Mongo Database

```javascript
[ { latLong: [ 40.7355145, -74.0031001 ],
    meetingName: 'PERRY STREET WORKSHOP',
    meetingAddress1: '50 Perry Street, Ground Floor,',
    meetingAddress2: '(Betw. 7th Avenue South &amp; West 4th Street) NY 10014',
    borough: 'Manhattan',
    meetingDetails: 'No 8:30 or 10:15 1st Wed of month due to Bus. meeting Wed.10:15pm=No BB 1st Wed.',
    meetingWheelchair: false,
    day: 'Tuesday',
    dayQuery: 2,
    startTime: '7:30 AM',
    hourQuery: 7,
    meetingType: 'C' },
  { latLong: [ 40.7355145, -74.0031001 ],
    meetingName: 'PERRY STREET WORKSHOP',
    meetingAddress1: '50 Perry Street, Ground Floor,',
    meetingAddress2: '(Betw. 7th Avenue South &amp; West 4th Street) NY 10014',
    borough: 'Manhattan',
    meetingDetails: 'No 8:30 or 10:15 1st Wed of month due to Bus. meeting Wed.10:15pm=No BB 1st Wed.',
    meetingWheelchair: false,
    day: 'Tuesday',
    dayQuery: 2,
    startTime: '9:00 AM',
    hourQuery: 9,
    meetingType: 'C' },
  { latLong: [ 40.7355145, -74.0031001 ],
    meetingName: 'PERRY STREET WORKSHOP',
    meetingAddress1: '50 Perry Street, Ground Floor,',
    meetingAddress2: '(Betw. 7th Avenue South &amp; West 4th Street) NY 10014',
    borough: 'Manhattan',
    meetingDetails: 'No 8:30 or 10:15 1st Wed of month due to Bus. meeting Wed.10:15pm=No BB 1st Wed.',
    meetingWheelchair: false,
    day: 'Tuesday',
    dayQuery: 2,
    startTime: '12:15 PM',
    hourQuery: 12,
    meetingType: 'S' },
  { latLong: [ 40.7355145, -74.0031001 ],
    meetingName: 'PERRY STREET WORKSHOP',
    meetingAddress1: '50 Perry Street, Ground Floor,',
    meetingAddress2: '(Betw. 7th Avenue South &amp; West 4th Street) NY 10014',
    borough: 'Manhattan',
    meetingDetails: 'No 8:30 or 10:15 1st Wed of month due to Bus. meeting Wed.10:15pm=No BB 1st Wed.',
    meetingWheelchair: false,
    day: 'Tuesday',
    dayQuery: 2,
    startTime: '2:30 PM',
    hourQuery: 14,
    meetingType: 'C' },
  { latLong: [ 40.7355145, -74.0031001 ],
    meetingName: 'PERRY STREET WORKSHOP',
    meetingAddress1: '50 Perry Street, Ground Floor,',
    meetingAddress2: '(Betw. 7th Avenue South &amp; West 4th Street) NY 10014',
    borough: 'Manhattan',
    meetingDetails: 'No 8:30 or 10:15 1st Wed of month due to Bus. meeting Wed.10:15pm=No BB 1st Wed.',
    meetingWheelchair: false,
    day: 'Tuesday',
    dayQuery: 2,
    startTime: '4:00 PM',
    hourQuery: 16,
    meetingType: 'C' },
  { latLong: [ 40.7355145, -74.0031001 ],
    meetingName: 'PERRY STREET WORKSHOP',
    meetingAddress1: '50 Perry Street, Ground Floor,',
    meetingAddress2: '(Betw. 7th Avenue South &amp; West 4th Street) NY 10014',
    borough: 'Manhattan',
    meetingDetails: 'No 8:30 or 10:15 1st Wed of month due to Bus. meeting Wed.10:15pm=No BB 1st Wed.',
    meetingWheelchair: false,
    day: 'Tuesday',
    dayQuery: 2,
    startTime: '6:00 PM',
    hourQuery: 18,
    meetingType: 'C' },
  { latLong: [ 40.7355145, -74.0031001 ],
    meetingName: 'PERRY STREET WORKSHOP',
    meetingAddress1: '50 Perry Street, Ground Floor,',
    meetingAddress2: '(Betw. 7th Avenue South &amp; West 4th Street) NY 10014',
    borough: 'Manhattan',
    meetingDetails: 'No 8:30 or 10:15 1st Wed of month due to Bus. meeting Wed.10:15pm=No BB 1st Wed.',
    meetingWheelchair: false,
    day: 'Tuesday',
    dayQuery: 2,
    startTime: '8:30 PM',
    hourQuery: 20,
    meetingType: 'C' },
  { latLong: [ 40.7355145, -74.0031001 ],
    meetingName: 'PERRY STREET WORKSHOP',
    meetingAddress1: '50 Perry Street, Ground Floor,',
    meetingAddress2: '(Betw. 7th Avenue South &amp; West 4th Street) NY 10014',
    borough: 'Manhattan',
    meetingDetails: 'No 8:30 or 10:15 1st Wed of month due to Bus. meeting Wed.10:15pm=No BB 1st Wed.',
    meetingWheelchair: false,
    day: 'Tuesday',
    dayQuery: 2,
    startTime: '10:15 PM',
    hourQuery: 22,
    meetingType: 'C' },
  { latLong: [ 40.7355145, -74.0031001 ],
    meetingName: 'LATE NIGHT',
    meetingAddress1: '50 Perry Street, Ground Floor,',
    meetingAddress2: '(Betw. 7th Avenue South &amp; West 4th Street) NY 10014',
    borough: 'Manhattan',
    meetingDetails: 'No 8:30 or 10:15 1st Wed of month due to Bus. meeting Wed.10:15pm=No BB 1st Wed.',
    meetingWheelchair: false,
    day: 'Tuesday',
    dayQuery: 2,
    startTime: '11:30 PM',
    hourQuery: 23,
    meetingType: 'C' },
  { latLong: [ 40.7355145, -74.0031001 ],
    meetingName: 'LATE NIGHT',
    meetingAddress1: '50 Perry Street, Ground Floor,',
    meetingAddress2: '(Betw. 7th Avenue South &amp; West 4th Street) NY 10014',
    borough: 'Manhattan',
    meetingDetails: 'No 8:30 or 10:15 1st Wed of month due to Bus. meeting Wed.10:15pm=No BB 1st Wed.',
    meetingWheelchair: false,
    day: 'Wednesday',
    dayQuery: 3,
    startTime: '2:00 AM',
    hourQuery: 2,
    meetingType: 'S' } ]
```

### Result of Mongo query at 2:45pm on a Tuesday

```javascript
[
   {
      "_id":{
         "latLong":[
            40.7355145,
            -74.0031001
         ]
      },
      "meetingGroups":[
         {
            "groupInfo":{
               "latLong":[
                  40.7355145,
                  -74.0031001
               ],
               "meetingName":"LATE NIGHT",
               "meetingAddress1":"50 Perry Street, Ground Floor,",
               "meetingAddress2":"(Betw. 7th Avenue South &amp; West 4th Street) NY 10014",
               "borough":"Manhattan",
               "meetingDetails":"No 8:30 or 10:15 1st Wed of month due to Bus. meeting Wed.10:15pm=No BB 1st Wed.",
               "meetingWheelchair":false
            },
            "meetingDay":[
               "Tuesday",
               "Wednesday"
            ],
            "meetingStartTime":[
               "11:30 PM",
               "2:00 AM"
            ],
            "meetingType":[
               "C",
               "S"
            ]
         },
         {
            "groupInfo":{
               "latLong":[
                  40.7355145,
                  -74.0031001
               ],
               "meetingName":"PERRY STREET WORKSHOP",
               "meetingAddress1":"50 Perry Street, Ground Floor,",
               "meetingAddress2":"(Betw. 7th Avenue South &amp; West 4th Street) NY 10014",
               "borough":"Manhattan",
               "meetingDetails":"No 8:30 or 10:15 1st Wed of month due to Bus. meeting Wed.10:15pm=No BB 1st Wed.",
               "meetingWheelchair":false
            },
            "meetingDay":[
               "Tuesday",
               "Tuesday",
               "Tuesday",
               "Tuesday",
               "Tuesday"
            ],
            "meetingStartTime":[
               "2:30 PM",
               "4:00 PM",
               "6:00 PM",
               "8:30 PM",
               "10:15 PM"
            ],
            "meetingType":[
               "C",
               "C",
               "C",
               "C",
               "C"
            ]
         }
      ]
   }
]```