// PUT YOUR CODE HERE
/* gsap.to(".box", {duration: 2, x: 300, borderRadius: "50%"}); */
/* gsap.from(".box, .red", {scale: 0, duration: 1}) */

//timeline
var tl = gsap.timeline();

//red box
tl.fromTo(".red", {
    x: '-50vw',
    y: '-50vh',
    backgroundColor: 'red',
}, {
    x: '0vw',
    y: '0vh',
    backgroundColor: 'red',
    duration: 1,
});

//green box
tl.fromTo(".green", {
    x: '50vw',
    y: '-50vh',
    backgroundColor: 'green',
}, {
    x: '0vw',
    y: '0vh',
    backgroundColor: 'green',
    duration: 1,
});

//blue box
tl.fromTo(".blue", {
    x: '100vw',
    y: '100vh',
    backgroundColor: 'blue',
    duration: 1,
},{
    x: '0vw',
    y: '0vh',
    backgroundColor: 'blue',
    duration: 1,
});

//yellow box
tl.fromTo(".yellow", {
    x: '-100vw',
    y: '100vh',
    backgroundColor: 'yellow',
    duration: 1,
},{
    x: '0vw',
    y: '0vh',
    backgroundColor: 'yellow',
    duration: 1,
});

//to circles
//red box behaviour
tl.fromTo(".red", {
    x: '0vw',
    backgroundColor: 'red',
}, {
    x: '90vw',
    backgroundColor: 'green',
    borderRadius: '50%',
    duration: 1,
},
"+=1");

//green box behaviour
tl.fromTo(".green", {
    x: '0vw',
    backgroundColor: 'green',
}, {
    y: '81vh',
    backgroundColor: 'blue',
    borderRadius: '50%',
    duration: 1,
},
"-=1");

//blue box
tl.fromTo(".blue", {
    x: '0vw',
    backgroundColor: 'blue',
}, {
    x: '-90vw',
    backgroundColor: 'yellow',
    borderRadius: '50%',
    duration: 1,
},
"-=1");

//yellow box
tl.fromTo(".yellow", {
    y: '0vh',
    backgroundColor: 'yellow',
}, {
    y: '-81vh',
    backgroundColor: 'red',
    borderRadius: '50%',
    duration: 1,
},
"-=1");

//disappearing
//yellow becomes red element
tl.to(".yellow", {
    x: '-100vw',
    duration: 1,
}, "+=1");

//red becomes green element
tl.to(".red", {
    x: '100vw',
    duration: 1,
}, "-=1");

//green becomes blue element
tl.to(".green", {
    x: '100vw',
    duration: 1,
}, "-=1");

//blue becomes yellow element
tl.to(".blue", {
    x: '-100vw',
    duration: 1,
}, "-=1");