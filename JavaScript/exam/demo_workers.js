let i = 0;
const timedCount = () => {
    i++;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();