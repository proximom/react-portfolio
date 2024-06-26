// // src/components/Introduction.js
// import React from 'react';
// import './Introduction.css';
// import Profile from './profile.jpg';
// import BackgroundImage from './background.jpg'; // Import the background image

// const Introduction = () => {
//   return (
//     <section id="introduction" className="introduction" style={{ backgroundImage: `url(${BackgroundImage})` }}>
//       <div className="introduction-content">
//         <img src={Profile} alt="Profile" className="profile-pic" />
//         <div className="bio">
//           <h1>Muhammad Ahsan Farooq</h1>
//           <h3>3rd-year CS Student</h3>
      
//           <p>
//             As a developer, I enjoy solving complex problems and implementing innovative solutions. I have a keen eye for detail and strive for excellence in everything I do. I am eager to continue learning and growing in the field of software engineering, and I am always open to new opportunities and challenges.
//           </p>
//           <h4>
//             Feel free to explore my portfolio to see some of my projects and get in touch if you'd like to collaborate or discuss any opportunities.
//           </h4>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Introduction;

// src/components/Introduction.js
import React from 'react';
import './Introduction.css';
import Profile from './profile.jpg';
import BackgroundImage from './background.jpg';

const Introduction = () => {
  return (
    <section id="introduction" className="introduction" >
      <div className="introduction-content">
        <div data-aos="fade-right">
        <img src={Profile} alt="Profile" className="profile-pic"  />
        <div className="bio">
          <h1>Muhammad Ahsan Farooq</h1>
          <div className="fr">
            <h3>Fullstack Developer</h3>
          </div>
          <p>
            I am a 3rd year CS student who's worked with several tech stacks
            like .NET with Blazor, MERN, Flutter, Native Android with Kotlin
            and Jetpack Compose etc.
          </p>
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default Introduction;

