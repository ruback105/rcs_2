function formatToString(value: string | number): string {
  async function test() {
    for (let i = 0; i < 10; i += 1) {
      // eslint-disable-next-line no-await-in-loop, no-promise-executor-return
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(i);
    }
  }

  test();

  return String(value);
}

export default formatToString;
