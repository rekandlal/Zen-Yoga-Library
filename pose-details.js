const poseData = {
  "mountain-pose": {
    name: "Mountain Pose (Tadasana)",
    sanskrit: "Tadasana",
    difficulty: "beginner",
    image: "https://images.unsplash.com/photo-1566053166052-0e4a0309c0da",
    description:
      "A standing pose that promotes good posture and body awareness.",
    benefits: ["Improves posture", "Strengthens thighs", "Steadies breathing"],
    overview:
      "Mountain Pose is the foundation for all standing poses. It teaches you about alignment and helps create a sense of groundedness and stability.",
    steps: [
      "Stand with feet together or hip-width apart",
      "Ground down through all four corners of your feet",
      "Engage your thigh muscles and draw them upward",
      "Lengthen your tailbone down while maintaining the natural curves of your spine",
      "Draw your shoulders back and down",
      "Keep your arms alongside your body with palms facing forward",
      "Hold the pose for 30-60 seconds while breathing deeply",
    ],
    tips: [
      "Keep your gaze forward or slightly upward",
      "Maintain an even weight distribution in your feet",
      "Keep your breathing steady and calm",
    ],
  },
  "warrior-i": {
    name: "Warrior I (Virabhadrasana I)",
    sanskrit: "Virabhadrasana I",
    difficulty: "intermediate",
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5",
    description:
      "A standing pose that stretches and strengthens the whole body.",
    benefits: ["Strengthens legs", "Opens hips", "Improves balance"],
    overview:
      "Warrior I is a powerful standing pose that builds strength, stability, and confidence. It opens the chest and shoulders while strengthening the legs and core.",
    steps: [
      "Start in Mountain Pose",
      "Step your left foot back 3-4 feet and place it at a 45-degree angle",
      "Bend your right knee over your ankle",
      "Lift your arms overhead, palms facing each other",
      "Draw your shoulder blades down your back",
      "Hold for 5-10 breaths",
      "Repeat on the other side",
    ],
    tips: [
      "Keep your front knee aligned with your ankle",
      "Press the back heel firmly into the ground",
      "Keep your hips facing forward",
    ],
  },
  "warrior-ii": {
    name: "Warrior II (Virabhadrasana II)",
    sanskrit: "Virabhadrasana II",
    difficulty: "intermediate",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    description: "A powerful standing pose that builds strength and stamina.",
    benefits: [
      "Strengthens legs and core",
      "Improves hip flexibility",
      "Builds endurance",
    ],
    overview:
      "Warrior II strengthens the legs while opening the hips and groin. This pose improves physical and mental endurance while promoting concentration and balance.",
    steps: [
      "Stand with legs 3-4 feet apart",
      "Turn your right foot out 90 degrees",
      "Bend your right knee over your ankle",
      "Extend your arms parallel to the ground",
      "Gaze over your right fingertips",
      "Hold for 30-60 seconds",
      "Repeat on the other side",
    ],
    tips: [
      "Keep your torso centered between your legs",
      "Sink deeper into the pose as you build strength",
      "Keep your back leg strong and straight",
    ],
  },
  "tree-pose": {
    name: "Tree Pose (Vrksasana)",
    sanskrit: "Vrksasana",
    difficulty: "beginner",
    image: "https://images.unsplash.com/photo-1516567727245-ad8c68f3ec93",
    description: "A balancing pose that improves focus and stability.",
    benefits: ["Improves balance", "Strengthens legs", "Increases focus"],
    overview:
      "Tree Pose improves balance, focus, and mental clarity while strengthening the legs and opening the hips. It teaches concentration and patience.",
    steps: [
      "Start in Mountain Pose",
      "Shift your weight onto your right foot",
      "Place your left foot on your right inner thigh or calf",
      "Bring your palms together at your heart",
      "Option to raise your arms overhead",
      "Fix your gaze on a steady point",
      "Hold for 30-60 seconds",
      "Repeat on the other side",
    ],
    tips: [
      "Never place your foot on your knee",
      "Start with your foot lower on the leg if needed",
      "Use a wall for support if necessary",
    ],
  },
  "cobra-pose": {
    name: "Cobra Pose (Bhujangasana)",
    sanskrit: "Bhujangasana",
    difficulty: "intermediate",
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f",
    description:
      "A back-bending pose that opens the chest and strengthens the spine.",
    benefits: ["Strengthens spine", "Opens chest", "Improves posture"],
    overview:
      "Cobra Pose strengthens the spine while opening the chest and shoulders. It helps improve posture and can help relieve stress and fatigue.",
    steps: [
      "Lie face down with legs extended",
      "Place hands under shoulders, elbows close to body",
      "Press the tops of your feet into the mat",
      "Inhale and lift your chest off the ground",
      "Keep your lower ribs on the mat",
      "Hold for 15-30 seconds",
      "Release back down with an exhale",
    ],
    tips: [
      "Keep your neck neutral",
      "Draw your shoulders away from your ears",
      "Press down through your hands evenly",
    ],
  },
  "childs-pose": {
    name: "Child's Pose (Balasana)",
    sanskrit: "Balasana",
    difficulty: "beginner",
    image: "https://images.unsplash.com/photo-1552286450-4a669f880062",
    description:
      "A restful pose that gently stretches the back and promotes relaxation.",
    benefits: [
      "Relieves back tension",
      "Calms the mind",
      "Stretches hips and thighs",
    ],
    overview:
      "Child's Pose is a restful pose that gently stretches the back, hips, and thighs while promoting relaxation and stress relief.",
    steps: [
      "Kneel on the floor with toes together",
      "Sit back on your heels",
      "Spread your knees wide",
      "Fold forward, extending arms in front",
      "Rest your forehead on the mat",
      "Breathe deeply and hold for 1-3 minutes",
    ],
    tips: [
      "Keep your arms active",
      "Breathe into your back",
      "Use a blanket under knees if needed",
    ],
  },
  headstand: {
    name: "Headstand (Sirsasana)",
    sanskrit: "Sirsasana",
    difficulty: "advanced",
    image: "https://images.unsplash.com/photo-1510914828947-36f754990aa5",
    description:
      "An advanced inversion that requires strength, balance, and concentration.",
    benefits: [
      "Improves blood circulation to brain",
      "Builds upper body strength",
      "Enhances focus and concentration",
    ],
    overview:
      'Often called the "king of asanas," Headstand is an advanced inversion that requires preparation and proper alignment. It builds strength while improving focus and circulation.',
    steps: [
      "Create a stable base with forearms on the ground",
      "Interlace fingers, creating a cradle for your head",
      "Place the crown of your head on the mat",
      "Walk feet closer to your head",
      "Lift your legs up one at a time",
      "Engage core and straighten legs",
      "Hold for up to 3 minutes",
      "Come down with control",
    ],
    tips: [
      "Always practice near a wall initially",
      "Never force yourself up",
      "Build up gradually with prep poses",
    ],
  },
  "peacock-pose": {
    name: "Peacock Pose (Mayurasana)",
    sanskrit: "Mayurasana",
    difficulty: "advanced",
    image: "https://images.unsplash.com/photo-1566496219551-9d135d324144",
    description:
      "A challenging arm balance that requires significant core and upper body strength.",
    benefits: [
      "Strengthens wrists and forearms",
      "Improves core stability",
      "Enhances balance and focus",
    ],
    overview:
      "Peacock Pose is an advanced arm balance that requires significant strength in the arms, wrists, and core. It improves balance and focus while building upper body strength.",
    steps: [
      "Kneel on the floor",
      "Place hands flat, fingers pointing toward feet",
      "Bend elbows, bringing torso forward",
      "Rest abdomen on upper arms",
      "Extend legs back",
      "Lift entire body parallel to floor",
      "Hold for 10-30 seconds",
    ],
    tips: [
      "Build wrist strength gradually",
      "Keep core engaged throughout",
      "Practice other arm balances first",
    ],
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const poseId = new URLSearchParams(window.location.search).get("pose");
  const pose = poseData[poseId];

  if (pose) {
    const detailsHtml = `
            <div class="row">
                <div class="col-md-6">
                    <img src="${pose.image}" alt="${
      pose.name
    }" class="img-fluid rounded mb-4">
                    <a href="index.html" class="btn btn-secondary mb-4">← Back to Poses</a>
                </div>
                <div class="col-md-6">
                    <h1 class="mb-3">${pose.name}</h1>
                    <p class="text-muted">${pose.sanskrit}</p>
                    <span class="badge difficulty-badge ${
                      pose.difficulty
                    } mb-3">${pose.difficulty}</span>

                    <h3 class="mt-4">Overview</h3>
                    <p>${pose.overview}</p>

                    <h3 class="mt-4">Benefits</h3>
                    <ul>
                        ${pose.benefits
                          .map((benefit) => `<li>${benefit}</li>`)
                          .join("")}
                    </ul>

                    <h3 class="mt-4">Step-by-Step Instructions</h3>
                    <ol>
                        ${pose.steps
                          .map((step) => `<li class="mb-2">${step}</li>`)
                          .join("")}
                    </ol>

                    <h3 class="mt-4">Tips</h3>
                    <ul>
                        ${pose.tips.map((tip) => `<li>${tip}</li>`).join("")}
                    </ul>
                </div>
            </div>
        `;
    document.getElementById("pose-details").innerHTML = detailsHtml;
  } else {
    document.getElementById("pose-details").innerHTML = `
            <div class="text-center">
                <h2>Pose not found</h2>
                <a href="index.html" class="btn btn-secondary mt-3">← Back to Poses</a>
            </div>
        `;
  }
});
