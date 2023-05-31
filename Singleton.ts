class Process {
  private static instance: Process;
  private process: number = 0;

  private constructor() {
    {
      this.process = +1;
    }
  }

  public static getInstance() {
    if (!this.instance) this.instance = new Process();
    return this.instance;
  }
}

const myProcess = Process.getInstance();
const myProcess2 = Process.getInstance();

//  Verify that both are the same instance
console.log(myProcess2 === myProcess);
