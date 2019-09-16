const testSimpleWordCount = () => {

    const testString = 'I have four words!';

    if (getWordCount(testString) !== 4) {

        console.error('Simple getWordCount failed!');

    }
}
