export const START = "start";
export const ANXIETY = "anxiety";
export const DEPRESSION = "depression";
export const SOMETHING_ELSE = "somethingElse";
export const LONELY = "lonely";
export const MEDICATION = "medication";
export const TOMORROW = "tomorrow";
export const STRETCH = "stretch";
export const ART = "art";
export const END = "end";

const QuestionData = {
  start: {
    id: START,
    title: "What's on your mind right now?",
  },
  anxiety: {
    id: ANXIETY,
    title: "Let's focus on how we can feel better right now. What is around us? Are we safe? Are we comfortable? Survey your surroundings.",
    body: "We're going to do a grounding excercise, but only if you want to. Take a look around.\nCount five things you can see.\nCount four things you can touch.\nCount three things you can hear.\nCount two things you can smell.\nCount one thing that you can taste.",
    prompt: "feeling anxious or stressed",
  },
  depression: {
    id: DEPRESSION,
    title: "Did something happen today that made you feel down?",
    prompt: "feeling depressed",
  },
  lonely: {
    id: LONELY,
    title: "do this",
    prompt: "just need a friend"
  },
  somethingElse: {
    id: SOMETHING_ELSE,
    title: "Did you take your medication today (if you're on any)?",
    prompt: "something else",
  },
  medication: {
    id: MEDICATION,
    title: "Hey, that's totally okay. Getting better can be really rough, and there's bad days sometimes, but you're trying your best, and that's what's important. Tomorrow is another day, and you can wake up and take it tomorrow",
    prompt: "yes, but I still feel down",
  },
  tomorrow: {
    id: TOMORROW,
    title: "The future can be a scary thought, but it doesn't have to be. Sometimes planning out your day or week can make you feel better and more organized. You can take control of what YOU want to do, even if that just means wearing your favorite tshirt or going on a walk with your dog",
    body: "Write down (in a planner, on a piece of scrap paper, or just on your phone) five or more things you want to do tomorrow. Do not just write down things you 'have' to do. Set small, reasonable goals. Set aside time for yourself to relax.",
    prompt: "what can we do tomorrow?",
  },
  stretch: {
    id: STRETCH,
    title: "Some days, it can be hard to get out of bed, or even want to wake up.",
    body: "Maybe you stayed in bed today, and that's okay! But if you can, you should get up and stretch your arms, legs, and back. Release all of your physical stress. If you can't get up and stretch, take 5 deep breaths (in through your nose and out through your mouth)",
    prompt: "let's do something else",
  },
  art:  {
    id: ART,
    title: "Sometimes visualizing or drawing something you love can make all the difference. Even if you're not artistic, drawing something that usually makes you smile can ease your mind and give you something else to focus on",
    body: "take a few minutes for yourself and draw your favorite thing in the world. It can be a cat, a person, some cute socks, or even yourself! It doesn't have to be perfect, just do your best.",
    prompt: "let's do something else",
  },
  end: {
    id: END,
    title: "Hey! You made it all the way through!",
    prompt: "this worked!"
  }
}

export default QuestionData;