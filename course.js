const paymentStatus = true;
const marks = 85;

const enroll = () => {
    console.log("Enrollment is in progress");
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (paymentStatus) {
                resolve();
            } else {
                reject("payment failed");
            }
        }, 2000);
    });
    return promise;
};
const progress = () => {
    console.log("course on progress");
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (marks >= 80) {
                resolve();
            } else {
                reject("failed");
            }
        }, 3000);
    });
    return promise;
};
const getCertificate = () => {
    console.log("preparing certificate");
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Congratulations! you got the certificate");
        }, 1000);
    });
    return promise;
};

enroll()
    .then(progress)
    .then(getCertificate)
    .then((value) => console.log(value))
    .catch((err) => console.log(err));
