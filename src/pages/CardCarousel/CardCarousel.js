import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./CardCarousel.css"

const CardCarousel = () => {
  // Dummy data for cards
  const cards = [
    {
      id: 1,
      title: 'Arya Sekhar',
      description: 'Software Engineer',
      imageUrl: 'https://img.freepik.com/free-photo/young-student-woman-wearing-denim-jacket-eyeglasses-holding-colorful-folders-showing-thumb-up-pink_176532-13861.jpg?w=996&t=st=1709028952~exp=1709029552~hmac=32dd1082924513fd55ca6f035b9a6b7a9becdae1f3c5252f631f40dda14c5c0c',
      link: '#'
    },
    {
      id: 2,
      title: 'Anu Agarwal',
      description: 'SDE 1, Cleartrip',
      imageUrl: 'https://img.freepik.com/premium-photo/young-asian-indian-student-with-glasses-backpack-holds-book-shows-thumbs-up_928503-89.jpg?w=740',
      link: '#'
    },
    {
      id: 3,
      title: 'Vivek Sangwan',
      description: 'SDE 1, Hyland',
      imageUrl: 'https://img.freepik.com/free-photo/smiling-happy-indian-student-with-backpack-pointing-his-finger-wall_496169-1532.jpg?w=996&t=st=1709030014~exp=1709030614~hmac=3b22b90d0a241e657f4d5757297bc05f1a28797f20730c5b82a8cc3d2dec9f2e',
      link: '#'
    },
    {
      id: 4,
      title: 'Aarushi Jain',
      description: 'SDE, Atlassian',
      imageUrl: 'https://img.freepik.com/free-photo/medium-shot-graduate-student_23-2148950577.jpg?w=1060&t=st=1709030108~exp=1709030708~hmac=5e07c9398604c35c21d87f869aa1affff0a4de93dacdc268480d0339f5d6e47d',
      link: '#'
    },
    {
      id: 5,
      title: 'Vathsav',
      description: 'SDE, AppDynamics',
      imageUrl: 'https://img.freepik.com/free-photo/front-view-male-student-green-checkered-shirt-with-black-backpack-holding-copybooks-smiling-blue-wall_140725-42439.jpg?w=996&t=st=1709030158~exp=1709030758~hmac=29e458cb84d00b2bef771eed95295ba6c4ecb3cd377113933468881ac18a2a82',
      link: '#'
    },
    {
      id: 6,
      title: 'Prince Kumar',
      description: 'Backend Developer',
      imageUrl: 'https://img.freepik.com/premium-photo/man-wearing-glasses-is-smiling-holding-tablet_905510-2118.jpg?w=740',
      link: '#'
    }
  ];

  // Owl Carousel options
  const options = {
    loop: true,
    margin: 15, // Adjust this value to set the gap between cards
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2, // Adjust the number of items displayed on different screen sizes
        nav: false
      },
      1000: {
        items: 4, // Display four items in big screens
        nav: true,
        loop: false
      }
    }
  };

  return (
    <div className="section">
      <div className="card-carousel1">
        <OwlCarousel className="owl-theme" dots={false} nav={true} {...options}>
          {cards.map(card => (
            <div key={card.id} className="item1">
              <div className="card" style={{ width: '18rem' }}>
                <img className="carousel1-img card-img-top" src={card.imageUrl} alt={card.title} />
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

export default CardCarousel;
