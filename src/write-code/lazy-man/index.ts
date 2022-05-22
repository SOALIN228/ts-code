class LazyMan {
  private name: string;
  private tasks: Function[] = [];

  constructor(name: string) {
    this.name = name;
    setTimeout(() => {
      // 宏任务，等待注册全部执行完，开始打印
      this.next();
    });
  }

  private next() {
    const task = this.tasks.shift();
    if (task) task();
  }

  eat(food: string) {
    const task = () => {
      console.log(`${this.name} eat ${food}`);
      this.next(); // 执行下一个任务
    };
    this.tasks.push(task);

    return this;
  }

  sleep(seconds: number) {
    const task = () => {
      setTimeout(() => {
        console.log("sleep 结束");
        this.next();
      }, seconds * 1000);
    };
    this.tasks.push(task);

    return this;
  }
}

// const me = new LazyMan("soa");
// me.eat("香蕉").sleep(5).eat("苹果");
