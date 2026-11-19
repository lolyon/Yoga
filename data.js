// ALL EDITABLE CONTENT LIVES HERE. Swap text and file names; no other code changes needed.
window.SITE_DATA = {
  studioName: "Your Studio Name",
  email: "client@example.com",          // booking requests are sent here

  intro: {
    image: "assets/intro-pose.jpg",     // full-screen yoga pose photo (landscape, 1920x1080+)
    audio: "assets/om-chant.mp3",       // Om chant, 10-15 seconds is plenty
    seconds: 12,                        // how long the intro plays before it fades out
    caption: "Om"
  },

  aboutYoga: {
    heading: "What is yoga?",
    paragraphs: [
      "Yoga is a practice that joins breath, movement and attention. It began in India more than two thousand years ago and has grown into a way of caring for the body and calming the mind.",
      "A class can be gentle or strong. Either way, you learn to move with your breath, notice where you hold tension and let it go. Many people come for flexibility and stay for the steadiness it brings to the rest of their day.",
      "You don't need to be flexible, fit or experienced. You only need to show up."
    ]
  },

  teacher: {
    name: "Client Name",
    title: "Yoga teacher",
    photo: "assets/teacher.jpg",        // portrait photo, about 800x1000
    paragraphs: [
      "Client Name is a certified yoga teacher who helps students find strength, ease and a quieter mind. Her classes are warm, clear and paced so every student can follow along.",
      "She trained in [style/school] and has taught for [X] years in studios, workplaces and private homes. She pays close attention to alignment and breath, and adapts every class to the people in the room.",
      "Outside the studio, she enjoys [hobby], [hobby] and long walks."
    ]
  },

  classes: [
    { name: "Gentle Morning Flow", level: "All levels", time: "Mon & Wed, 7:30 am", length: "60 min",
      text: "Slow stretches and breathing to wake the body without rushing it.",
      photos: ["assets/classes/morning-flow-1.jpg", "assets/classes/morning-flow-2.jpg", "assets/classes/morning-flow-3.jpg"] },
    { name: "Vinyasa Strength", level: "Intermediate", time: "Tue & Thu, 6:00 pm", length: "75 min",
      text: "Flowing sequences that build strength, balance and stamina.",
      photos: ["assets/classes/vinyasa-1.jpg", "assets/classes/vinyasa-2.jpg", "assets/classes/vinyasa-3.jpg"] },
    { name: "Restore and Unwind", level: "All levels", time: "Fri, 7:00 pm", length: "60 min",
      text: "Supported poses held for longer, finishing with guided relaxation.",
      photos: ["assets/classes/restore-1.jpg", "assets/classes/restore-2.jpg", "assets/classes/restore-3.jpg"] },
    { name: "Private Session", level: "Any level", time: "By appointment", length: "60 min",
      text: "One-to-one teaching built around your goals, injuries and schedule.",
      photos: ["assets/classes/private-1.jpg", "assets/classes/private-2.jpg", "assets/classes/private-3.jpg"] }
  ]
};