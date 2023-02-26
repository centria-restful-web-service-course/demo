const fs = require('fs');

const appointmentsFile = './src/assets/appointments.json';

const appointmentsRepo = {
  get(resolve, reject) {
    fs.readFile(appointmentsFile, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  },
  getByID(id, resolve, reject) {
    fs.readFile(appointmentsFile, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const appointment = JSON.parse(data).find((a) => a.id === id);
        resolve(appointment);
      }
    });
  },
  getByDate(date, resolve, reject) {
    console.log(date);
    fs.readFile(appointmentsFile, (err, data) => {
      if (err) {
        reject(err);
      } else {
        console.log('in read file', date);
        const appointment = JSON.parse(data).filter((a) => a.start.startsWith(date));

        resolve(appointment);
      }
    });
  },
  insert(newData, resolve, reject) {
    fs.readFile(appointmentsFile, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const appointments = JSON.parse(data);
        appointments.push(newData);
        fs.writeFile(appointmentsFile, JSON.stringify(appointments), (writeErr) => {
          if (err) {
            reject(writeErr);
          } else {
            resolve(newData);
          }
        });
      }
    });
  },
};

module.exports = appointmentsRepo;
