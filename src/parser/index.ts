import { spawn, execSync } from 'child_process';
const ls = spawn('../scripts/submit_job.sh');

execSync('chmod -R 777 ../scripts/submit_job.sh')

ls.stdout.on('data', (data) => {
  try {
    console.log(JSON.parse(`${data}`))
  } catch (error) {
    console.error('The python cli data can not be parsed.')
  }
});

ls.stderr.on('data', (data) => {
  console.error(`${data}`);
});

ls.on('close', (code) => {
  if (code === 0) {
    console.log('The job has been done successfully.')
  } else {
    console.error(`Something went wrong. The exit code is ${code}`)
  }
});

