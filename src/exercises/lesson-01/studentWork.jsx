//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const myName = 'Neghin';
  const myAge = 30;
  const myHobbies = [
    { id: 1, title: 'Hiking' },
    { id: 2, title: 'Reading' },
    { id: 3, title: 'Cooking' },
  ];
  return (
    <div>
      {/* add JSX here */}
      <h1>About Me</h1>

      <p>
        {' '}
        My name is {myName} and I{"'"}m in my {myAge}s. I took Intro to
        Programming last term and I{"'"}m excited to keep building on it with
        React this term. My goal is to become a full-stack software developer
        and build intuitive, scalable applications that solve real-world
        problems.
      </p>

      <h3>My Hobbies:</h3>
      <ul>
        {myHobbies.map((hobby) => (
          <li key={hobby.id}>{hobby.title}</li>
        ))}
      </ul>
    </div>
  );
}
