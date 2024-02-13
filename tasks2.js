function makeDroids() {
    const droids = [];
    for (var i = 0; i < 10; i++) {
        const droid = (index) => {
            console.log("D" + index);
        };
        droids.push(droid.bind(null, i));
    }
    return droids;
}

for (let d of makeDroids()){
    d();
}