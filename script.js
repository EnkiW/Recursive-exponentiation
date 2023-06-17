function pow(num, num2) {
    if (num2 === 0) {
        return 1;
    }
    return num * pow(num, num2 - 1);
}
