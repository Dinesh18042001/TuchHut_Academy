import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./CardCarousel2.css"

const CardCarousel2 = () => {
  const cards = [
    {
      id: 1,
      title: 'Card 1',
      description: 'Description for Card 1',
      imageUrl: 'https://img.freepik.com/free-photo/attractive-male-university-student-doing-some-homework-school-library-smiling_662251-1222.jpg?w=740&t=st=1709030561~exp=1709031161~hmac=0ce080bc16475172b286acfcf0ac497dd030b3a71196a21f53dcb998ad7686e4',
      link: '#'
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Description for Card 2',
      imageUrl: 'https://img.freepik.com/premium-photo/portrait-indian-student-guy-smiling-background-university_409674-1149.jpg?w=1380',
      link: '#'
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'Description for Card 3',
      imageUrl: 'https://img.freepik.com/free-photo/young-student_1098-15250.jpg?w=996&t=st=1709030652~exp=1709031252~hmac=715ab3532fc51bd71fd025bd01e505fc6a3c852885f87e6da03cb71edddbf171',
      link: '#'
    },
    {
      id: 4,
      title: 'Card 4',
      description: 'Description for Card 4',
      imageUrl: 'https://img.freepik.com/premium-photo/happy-indian-male-student-university_255667-44376.jpg?w=996',
      link: '#'
    },
    {
      id: 5,
      title: 'Card 5',
      description: 'Description for Card 5',
      imageUrl: 'https://img.freepik.com/premium-photo/indian-male-college-student-campus-with-books-bag_466689-96701.jpg?w=996',
      link: '#'
    },
    {
      id: 6,
      title: 'Card 6',
      description: 'Description for Card 6',
      imageUrl: 'https://img.freepik.com/free-photo/young-man-sunglasses-white-shirt-with-gray-pants-speaking-his-phone-with-cup-cofee_496169-2334.jpg?w=996&t=st=1709030788~exp=1709031388~hmac=d65653618ca915929953971fe876b017444ba3f54a66eb6448e281cdca52ff7e',
      link: '#'
    }
  ];

  // Owl Carousel options
  const options = {
    loop: true,
    margin: 10, // Adjust the margin to add space between items
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 5, // Set the number of items to be displayed on large screens
        nav: true,
        loop: false
      }
    }
  };

  return (
    <div className="section">
      <div className="card-carousel2">
        <OwlCarousel className="owl-theme" dots={false} {...options}>
          {cards.map(card => (
            <div key={card.id} className="item2">
              <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={card.imageUrl} alt={card.title} />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  <a href={card.link} className="btn" style={{background:"#854DCE", color: "#fff"}}>Go somewhere</a>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default CardCarousel2;



        