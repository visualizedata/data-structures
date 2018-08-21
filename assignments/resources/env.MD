# environment variables

## Text Editor 

You will need to use a text editor on your EC2 instance. One option is Vim. Here are the handful of commands you'll need to use it:

`vim test.js` Opens **test.js** in Vim. 

Press the "i" key on your keyboard. This starts **INSERT mode**, which allows you to make edits. 

Proceed with any edits you'd like to make. You can't use your mouse in Vim. Otherwise, it will behave like any other editor. 

When finished with edits, press the "esc" key on your keyboard. This will exit **INSERT mode**. 

`:w` Writes (saves) the edits you made

`:q` Exits Vim

`:q!` Exits Vim without writing/saving the edits you made

## Permanent environment variables

To permanently set environment variables: 

`sudo -H vim /etc/environment` Will open the file (in Vim) where you can add environment variables (each on a new line). Once finished adding variables, exit Vim. 

`exit` Use this command to exit your EC2 instance. Then `ssh` back into your instance. This logs you out and back in again so the permanent variables are accessible in this session (and all future sessions). 

## Environment variables in PM2

PM2 now handles environment variables through a configuration file with the name `ecosystem.config.js`. We will go over the use of this file in class 11/7. If you want to get started on this beforehand, [the documentation](http://pm2.keymetrics.io/docs/usage/environment/) specifies its use and functionality. 

Here's an example `ecosystem.config.js` file that manages two processes: 1) `app.js`, the web app that responds to all requests with JSON from a Postgres query and 2) `write_sensor_values.js` that makes a request to a Photon API and inserts data from the response into a Postgres database. 

```javascript
module.exports = {
  apps : [
      {
        name: "webserver",
        script: "./app.js",
        watch: true,
        env: {
          "NODE_ENV": "development",
        }
      },
      {
        name: "sensorwrite",
        script: "./write_sensor_values.js",
        watch: true,
        env: {
          "NODE_ENV": "development",
        }
      }
  ]
}
```

You can then manage these process through the `ecosystem.config.js` file: 

`pm2 start ecosystem.config.js` starts both of the processes in the `ecosystem.config.js` file. 

`pm2 stop ecosystem.config.js` stops both of the processes in the `ecosystem.config.js` file. 

`pm2 start ecosystem.config.js --only webserver` starts only the `webserver` process in the `ecosystem.config.js` file. 

`pm2 stop ecosystem.config.js --only webserver` stops only the `webserver` process in the `ecosystem.config.js` file. 