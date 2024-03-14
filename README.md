````markdown
# Job Scheduling Package

Job Scheduling Package is a simple Node.js package that provides functionality to schedule and manage recurring tasks within a Node.js application.

## Installation

You can install the package via npm:

```bash
npm install job-scheduling-package
```

## Usage

```javascript
const JobScheduling = require('job-scheduling-package');

// Create an instance of JobScheduling
const jobScheduler = new JobScheduling();

// Define a task function
const task = () => {
  console.log('Task executed!');
};

// Schedule a job to run the task every 3 seconds
jobScheduler.scheduleJob('TaskJob', 3000, task);

// Cancel the job after 10 seconds
setTimeout(() => {
  jobScheduler.cancelJob('TaskJob');
}, 10000);
```

## API

### `JobScheduling`

The `JobScheduling` class provides functionality to schedule and manage recurring tasks.

#### `scheduleJob(jobName, interval, task)`

Schedules a new job with the specified name, interval, and task function.

- `jobName` (string): The name of the job.
- `interval` (number): The interval (in milliseconds) at which the task should be executed.
- `task` (function): The task function to be executed.

#### `cancelJob(jobName)`

Cancels the scheduled job with the specified name.

- `jobName` (string): The name of the job to be cancelled.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
