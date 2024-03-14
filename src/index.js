// jobScheduling.js

class JobScheduling {
    constructor() {
      this.jobs = [];
    }
  
    scheduleJob(jobName, interval, task) {
      const job = setInterval(() => {
        console.log(`Executing ${jobName}...`);
        task();
      }, interval);
  
      this.jobs.push({
        name: jobName,
        interval,
        job
      });
    }
  
    cancelJob(jobName) {
      const jobIndex = this.jobs.findIndex(job => job.name === jobName);
      if (jobIndex !== -1) {
        clearInterval(this.jobs[jobIndex].job);
        this.jobs.splice(jobIndex, 1);
        console.log(`Cancelled job: ${jobName}`);
      } else {
        console.log(`Job ${jobName} not found`);
      }
    }
  }
  
  module.exports = JobScheduling;