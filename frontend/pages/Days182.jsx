import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faUtensils, faCar,faEnvelope,faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaFacebook, FaInstagram,FaTiktok } from 'react-icons/fa';


function Days182() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [additionalDescriptions, setAdditionalDescriptions] = useState({
    day1: false,
    day2: false,
    day3: false,
    day4: false,
    day5: false,
    day6: false,
    day7: false,
    day8: false,
    day9: false,
    day10: false,
    day11: false,
    day12: false,

  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setsubject] = useState('');
  const [message, setMessage] = useState('');
  const [isformvisible, setisformvisible] = useState(false);
  const [notification, setNotification] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const showAlert = () => {
    alert('Thank you for choosing Lahiru Tours! We are excited to assist you in planning your perfect Sri Lankan adventure. Our team will promptly get back to you within 24 hours with a customized itinerary tailored to your interests and needs.For any immediate questions or additional information, please feel free to contact us directly at info@lahirutours.co.uk.We look forward to making your travel dreams come true!Warm regards,The Lahiru Tours Team');
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };
  const appStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflow: 'hidden',
  };

  const headerStyle = {
    justifyContent: '',
    padding: '0px',
    backgroundColor:'#D3D3D3',
    color: 'black',
    position: '',
    width: '100%',
    top: '',
    left: '0',
    zIndex: '1000',
  };
  const header1style = {
    justifyContent: 'center',
    padding: '0px',
    backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)',
    color: '',
    position: '',
    width: '100%',
    top: '',
    left: '0',
    transition: 'background-color 0.3s ease',
    zIndex: '',
    marginTop: '0px',
  }
  const bookbuttonstyle = {
    display: isMobile ? 'none' : 'block', // Hide on mobile
    backgroundColor: '#90EE90',
      color: 'white',
      padding: '20px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1.6em',
      marginTop: '0px',
      };
    const bookbuttonstyle3 = {
        display: isMobile ? 'none' : 'block', // Hide on mobile
        backgroundColor: '#4682B4',
          color: 'white',
          padding: '20px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1.6em',
          marginTop: '0px',
          };
  
  const bookbuttonstyle2 = {
    display: isMobile ? 'block' : 'none', // Hide on mobile
    backgroundColor: '#4682B4',
      color: 'white',
      padding: '20px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1.6em',
      marginTop: '0px',
       };

       const logoImgStyle = {
        height: 'auto',
        width:'120px',
        marginTop: '0px',
      };

  const h1Style = {
   
    fontSize: '3em',
    color:'#4682B4',
    margin: '0',
  };
  const navbarStyle = {
    backgroundColor: '',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: '',
    top: '0',
    left: '0',
    width: '100%',
    height: '70px',
    padding: '10px 20px',
    transition: 'transform 0.3s ease',
    transform: isNavbarVisible ? 'translateY(0)' : 'translateY()',
    zIndex: '1000',
  };
  const navbarStyle2 = {
    fontSize:isMobile?'15px':'auto',
    backgroundColor: 'white',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'auto',
    height: '120px',
    padding: '10px 0px 0px  ',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    zIndex: '1000',
  };
  
  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    margin: '0 10px',
  };
  
  const navLinksStyle = {
    display: 'flex',
    alignItems: 'center',
  };
  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px', // Adds space between buttons
  };



  const mainContentStyle = {
    flex: '1',
    padding: '20px 40px',
    transition: 'margin-left 0.3s ease',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  const tourPackagesStyle = {
    backgroundColor: '',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0)',
    marginBottom: '20px',
    justifyContent: 'center',
  };

  const packageStyle = {
    marginBottom: '40px',
    justifyContent: 'center',
  };

  const packageDescriptionStyle = {
    //display:isMobile? 'inline-block':'',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: isMobile?'0px':'20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0)',
    position: 'center',
    textAlign:isMobile? 'justify':'left',
    maxWidth:isMobile? '100%':'80%',
  };

  const photoStyle = {
    display:isMobile?'flex':'',
    width:isMobile? '400px':'900px',
    height: isMobile?'400px':'700px',
    objectFit: 'cover',
    justifyContent:'center',
    margin: '20px 0',
    marginLeft:'px',
    borderRadius:'20px',
    //border:'5px solid #4682B4',
  };

  const additionalDescriptionStyle = {
    fontFamily:'Forever Brush Script',
    marginTop: '50px',
    marginLeft: '00px',
    marginRight: '00px',
    fontSize: '1.5em',
    textAlign: 'left',
  };

  const arrowButtonStyle = {
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '1em',
    color: '#333',
    outline: 'none',
    marginBottom: '10px',
    transition: 'transform 0.8s ease',
  };

  const arrowButtonHoveredStyle = {
    transform: 'scale(1.1)',
  };

  const footerStyle = {
    padding: '20px 40px',
    backgroundColor: '#4682b4',
    color: 'white',
    textAlign: 'left',
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  };
  const iconStyle = {
    fontSize: '0.9em',  // Adjust the font size
    margin: '10px',   // Add margin around each icon
    color: '#007bff',  // Change the icon color
    marginRight: '00px',
    marginTop:'0px',
    alignItems:'left'
  };

  const footerSectionStyle = {
    marginBottom: '20px',
    flex: '1 1 200px',
  };

  const footerSectionTitleStyle = {
    borderBottom: '1px solid white',
    paddingBottom: '10px',
    marginBottom: '10px',
  };

  const footerListStyle = {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  };

  const mapstyle = {
    display: isMobile ? 'none' : 'block', // Hide on mobile
    width: '900px',
    height: '700px',
    objectFit: 'cover',
    borderRadius: '5%',
    margin: '20px 100px',
    marginLeft:'000px',
  };
  const mapstyle2 = {
    display: isMobile ? 'block' : 'none', // Hide on pc
    width: '400px',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '5%',
    margin: '0px 00px',
    
  };

  const footerListItemStyle = {
    marginBottom: '10px',
  };

  const socialLinkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  const handleToggleForm = () => {
    setisformvisible(!isformvisible);
  };
  const formStyle = {
    flex: '1',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '',
    border: '2px solid #3498db',
    boxShadow: '0 4px 8px rgba(1, 1, 1, 1)',
    maxWidth: 'auto',
    fontFamily: 'Arial, sans-serif',
    position: 'fixed',
    top:isMobile? '30px' : 'auto', // To align with the header
    bottom:'10px',
    display: isformvisible ? 'block' : 'none', // Show/hide based on state
    right: '20px',
    zIndex: '999',
    //height:isMobile?'auto':'auto',
    marginRight: '103px',
    '@media (max-width: 768px)': {
      display: 'none',
    },
   minHeight:isMobile?'auto':'80%',
    
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  };

  const textareaStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    minHeight: '120px',
  };

  const buttonStyle = {
    backgroundColor: '#4682B4',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };
  const h2Style = {
    fontSize: '2em',
    margin: '0',
    color: '#333',
    padding: '10px',
    borderRadius: '8px',
    display: 'inline-block',
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
   

    try {
      const response = await fetch('http://localhost:5555/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error sending email: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const responseData = await response.json();

        if (responseData.success) {
         // alert('Email sent successfully!');
          setName("");
          setEmail("");
          setPhone("");
          setsubject("");
          setMessage("");
          
        } else {
          alert('Failed to send email.');
        }
      } else {
        
      }
    } catch (error) {
      console.alert(error);
      alert('Error');
    }
    window.location.reload(); // Reload the page
  };

  const toggleAdditionalDescription = (day) => {
    setAdditionalDescriptions((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  return (
    <div style={appStyle}>
      <header style={header1style} >
      <div style={navbarStyle}>
      {/* Left Section: Logo */}
      <div>
        <h1 style={{ margin: '0', padding: '0', fontSize: '1em' }}><b>info@lahirutours.co.uk</b></h1>
      </div>
      
      {/* Center Section: Navigation Links */}
      <div style={navLinksStyle}>
       
      </div>
      
      {/* Right Section: Buttons */}
      <div style={buttonContainerStyle}>
      <a href="https://www.facebook.com/share/TLHsJswwmcxzvuiA/?mibextid=WC7FNe" target="_blank" rel="noopener noreferrer" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          <FaFacebook size={30} />
        </a>
        <a href="https://www.instagram.com/lahiru_tours_sri_lanka?igsh=azYyenZxaHZ6aW1y&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          <FaInstagram size={30} />
        </a>
        <a href="https://vm.tiktok.com/ZGevyQ8eB/" target="_blank" rel="noopener noreferrer" style={{  padding: '10px 20px', cursor: 'pointer' }} >
          <FaTiktok size={30}  />
  </a>

        {/* Add more buttons as needed */}
      </div>

    </div>

            
      </header>

      <section style={headerStyle}>
      <div style={navbarStyle2}>
  {/* Left Section: Logo */}
  <div>
  <img src="https://lahirutours.co.uk/photos/logo.gif" alt="Logo" style={logoImgStyle} />
  </div>
  
  {/* Center Section: Navigation Links */}
  <div style={navLinksStyle}>
    <a href="/" style={linkStyle}>Home</a>
    <a href="/About" style={linkStyle}>About Us</a>
    <a href="/TourPackages" style={linkStyle}><b>Tour Packages</b></a>
    <a href="/ContactUS" style={linkStyle}>Contact</a>
    <a href="/feedback" style={linkStyle}>FAQ</a>
  </div>
<div style={{ marginRight: '10px',marginTop:'19px',display:'flex',gap:'10px' }}> {/* Right-aligned content */}
   <Link to="/signin" style={bookbuttonstyle}>
   <b>Login</b>
             </Link> 
             <Link to="/register" style={bookbuttonstyle3}>
   <b>Register</b>
             </Link> 
   </div>
  
  
</div>
        
        
        
      </section>
      
      <h1 style={h1Style}><b>18 Days North & South Tour Package</b></h1>
      <main style={mainContentStyle}>
        <section style={tourPackagesStyle}>
        <div style={{packageStyle , display:'flex',gap:isMobile?'0':'20%'}}>
        <div>
            <img
              src="../images/a2.jpeg"
              alt="Tour Image"
              style={{ ...photoStyle,objectFit:'cover' }}
            />
            </div>
            <div>
             <img
              src="../images/a7.jpeg"
              alt="Tour Image"
              style={{ ...mapstyle }}
            />
            </div>
            </div><br />
            <div>
             <img
              src="https://lahirutours.co.uk/photos/Day 18nn.gif"
              alt="Tour Image"
              style={{ ...mapstyle2 }}
            />
            </div>
            
            
            
            <div style={{width:isMobile?'auto':'40%',display:'',border:'2px solid blue',boxShadow: '0px 4px 8px rgba(1, 1, 1, 1)',borderRadius:'10px',padding:'20px'}}>
           <h1 style={{fontSize:'1em',textAlign:'left',fontFamily:'Ubuntu'}}>All our tour packages include travel to all attractions during your travel. Additionally, all our packages include high standard hotel stays with breakfast and dinner provided throughout your stay</h1><br />

            <p style={{fontSize:'1.2em',textAlign:'left',fontFamily:'Oswald',color:'blue'}}><b>Note:</b></p><h1 style={{fontSize:'1.3em',textAlign:'left',fontFamily:'Nanum Gothic'}}> Our travel packages do not include airline tickets. If you would like us to arrange your airline tickets, please contact our admin team through our contact form or at <u>admin@lahirutours.co.uk.</u></h1>
            </div>
            
            <div style={{ ...packageDescriptionStyle, textAlign: 'left', alignItems: 'center' }}>
            <div style={iconStyle}>
              <FontAwesomeIcon  icon={faBed} size="3x" />
              <FontAwesomeIcon style={{padding:'10px'}}  icon={faUtensils} size="3x" />
              <FontAwesomeIcon  icon={faCar} size="3x" />  
              </div>
              <div style={additionalDescriptionStyle}>
                <p>Day 1 - Negombo</p>
                <button
                  style={{
                    ...arrowButtonStyle,
                    ...(additionalDescriptions.day1 ? arrowButtonHoveredStyle : {}),
                  }}
                  onClick={() => toggleAdditionalDescription('day1')}
                >
                  {additionalDescriptions.day1 ? '▲ Hide Details' : '▼ Show Details'}
                </button>
                {additionalDescriptions.day1 && (
                  <div>
                    <h4>Explore the vibrant city of Colombo upon your arrival.</h4>
                    <p>
                    The sunny, coastal town of Negombo is a mere 20 minutes from Bandaranaike International Airport, making it the ideal place to start or end your journey in Sri Lanka. Affectionately dubbed ‘Little Rome’, Negombo offers a variety of attractions, from medieval churches and a noisy fish market to fresh seafood and some of the most scenic beaches on the island. The town’s rich history, with a predominant Dutch influence, is evident throughout.
<br /> <br />Activities: <br />
 <br />•	Arrive at Sri Lanka (Katunayake International Airport): Begin your journey with a warm welcome from our Olanka representative and driver at the airport.
 <br />•	Proceed to Negombo city: Travel to ‘Little Rome’ of Sri Lanka’s cultural heritage.<br />

•	Spend time at the beach: Relax on some of Sri Lanka’s most scenic beaches, enjoying the sun and the sea.<br />
•	Go for a boat ride: Experience the charm of Negombo's waterways with a leisurely boat ride.<br />
•	Visit the Dutch Fort: Explore the historical Dutch Fort, a testament to the town's colonial past.<br />
•	Visit St. Mary’s Church and Angurukaramulla Temple: Discover the religious heritage of Negombo by visiting St. Mary’s Church and the Angurukaramulla Temple.<br />
Enjoy your first day soaking in the vibrant culture and picturesque landscapes of Negombo!<br />

<img style={photoStyle} src="https://lahirutours.co.uk/photos/Negambo.jpg" alt="" />
                    </p>
                  </div>
                )}
              </div>



              <div style={additionalDescriptionStyle}>
                <p>Day 2 & 3 - Anuradhapura</p>
                <button
                  style={{
                    ...arrowButtonStyle,
                    ...(additionalDescriptions.day2 ? arrowButtonHoveredStyle : {}),
                  }}
                  onClick={() => toggleAdditionalDescription('day2')}
                >
                  {additionalDescriptions.day2 ? '▲ Hide Details' : '▼ Show Details'}
                </button>
                {additionalDescriptions.day2 && (
                  <div>
                    
                    <p>
                    Anuradhapura is an ancient city in Sri Lanka, renowned for its well-preserved ruins and historical significance. Once the capital of the country, it flourished from the 4th century BCE to the 11th century CE. The city is famous for its impressive archaeological sites, including ancient monasteries, stupas, and the sacred Bodhi tree, which is believed to be a sapling from the original tree under which the Buddha attained enlightenment. Anuradhapura's heritage sites reflect its rich Buddhist culture and historical importance, making it a UNESCO World Heritage site and a major attraction for history enthusiasts and pilgrims alike.
<img style={photoStyle} src="https://lahirutours.co.uk/photos/Anuradhapura.jpg" alt="" />
                    </p>
                  </div>
                )}
              </div>



              <div style={additionalDescriptionStyle}>
                <p>Day 4 & 5 - Jaffna
                </p>
                <button
                  style={{
                    ...arrowButtonStyle,
                    ...(additionalDescriptions.day3 ? arrowButtonHoveredStyle : {}),
                  }}
                  onClick={() => toggleAdditionalDescription('day3')}
                >
                  {additionalDescriptions.day3 ? '▲ Hide Details' : '▼ Show Details'}
                </button>
                {additionalDescriptions.day3 && (
                  <div>
                    <p>
                    Jaffna, located in the northern part of Sri Lanka, is a vibrant city with a rich cultural heritage and a unique blend of Tamil and Sri Lankan influences. Known for its historic temples, colonial architecture, and picturesque landscapes, Jaffna has long been a center of Tamil culture and tradition. The city features notable landmarks such as the Jaffna Fort, a 17th-century Dutch fortress, and the Nallur Kandaswamy Kovil, a significant Hindu temple. Jaffna's cuisine, characterized by its spicy and flavorful dishes, offers a taste of the region's distinct culinary traditions. Despite the challenges of recent history, Jaffna remains a resilient and culturally rich area, attracting visitors with its historical sites, cultural festivals, and warm hospitality.
<img style={photoStyle} src="https://lahirutours.co.uk/photos/Jaffna.jpg" alt="" />
                    </p>
                  </div>
                )}
              </div>
              <div style={additionalDescriptionStyle}>
                <p>Day 6 & 7 - Trincomalee
                </p>
                <button
                  style={{
                    ...arrowButtonStyle,
                    ...(additionalDescriptions.day4 ? arrowButtonHoveredStyle : {}),
                  }}
                  onClick={() => toggleAdditionalDescription('day4')}
                >
                  {additionalDescriptions.day4 ? '▲ Hide Details' : '▼ Show Details'}
                </button>
                {additionalDescriptions.day4 && (
                  <div>
                    
                    <p>
                    Trincomalee, located on the northeast coast of Sri Lanka, is a bustling port city known for its stunning natural beauty and rich history. It boasts one of the finest natural harbors in the world, making it a strategic naval base. The city's attractions include pristine beaches like Nilaveli and Uppuveli, which are ideal for relaxation and water sports.

Trincomalee is also home to significant cultural and historical sites, such as the Koneswaram Temple, an ancient Hindu shrine perched atop Swami Rock, and the Dutch Fort, a relic of the colonial era. The nearby Pigeon Island National Park offers opportunities for snorkeling and observing marine life. With its blend of scenic landscapes, historical landmarks, and vibrant local culture, Trincomalee is a captivating destination for travelers seeking both relaxation and exploration.
<img style={photoStyle} src="https://lahirutours.co.uk/photos/Trincomalee.jpg" alt="" />
                    </p>
                  </div>
                )}
              </div>
              <div style={additionalDescriptionStyle}>
                <p>Day 8 - Polonnaruwa
                </p>
                <button
                  style={{
                    ...arrowButtonStyle,
                    ...(additionalDescriptions.day5 ? arrowButtonHoveredStyle : {}),
                  }}
                  onClick={() => toggleAdditionalDescription('day5')}
                >
                  {additionalDescriptions.day5 ? '▲ Hide Details' : '▼ Show Details'}
                </button>
                {additionalDescriptions.day5 && (
                  <div>
                    
                    <p> 
                    Polonnaruwa, located in central Sri Lanka, is an ancient city renowned for its well-preserved archaeological sites and historical significance. Once the capital of Sri Lanka during the 11th and 12th centuries, it flourished as a major center of culture and commerce.

The city is renowned for its impressive ruins, including the Royal Palace, the Gal Vihara with its stunning rock-cut Buddha statues, and the Parakrama Samudra, an extensive reservoir system built by King Parakramabahu I. The ancient city’s well-preserved temples, statues, and irrigation systems offer a glimpse into the sophisticated engineering and artistic achievements of its time. Polonnaruwa is a UNESCO World Heritage site, drawing visitors with its rich historical heritage and contributions to Sri Lankan history and culture.
<br /><br /><b>Activities:</b><br />
•	Wake Up: Greet the day with bird songs and a delicious breakfast buffet at the hotel.<br />
•	Explore: Visit the ancient city of Anuradhapura, including Mihintale and the Ritigala Forest Monastery.<br />
•	Travel: Proceed to Polonnaruwa, and immerse yourself in its historical wonders.<br />
•	Sightseeing: Discover the Royal Palace, Audience Hall, and Royal Swimming Pool in Polonnaruwa.<br />
•	Cycle: Enjoy a bike ride through the village and interact with friendly locals.<br />
•	Relax: Experience the serene beauty of the Parakrama Reservoir at sunset.<br />
•	Dinner: Indulge in a grand buffet dinner at the hotel.<br />
•	Overnight: Stay in a comfortable hotel surrounded by the rural charm of Polonnaruwa.<br /><br />
<img style={photoStyle} src="https://lahirutours.co.uk/photos/Polonnaruwa.jpg" alt="" />
                    </p>
                    
                  </div>
                )}
              </div>
              <div style={additionalDescriptionStyle}>
                <p>Day 9 & 10 - Dambulla / Sigiriya</p>
                <button
                  style={{
                    ...arrowButtonStyle,
                    ...(additionalDescriptions.day6 ? arrowButtonHoveredStyle : {}),
                  }}
                  onClick={() => toggleAdditionalDescription('day6')}
                >
                  {additionalDescriptions.day6 ? '▲ Hide Details' : '▼ Show Details'}
                </button>
                {additionalDescriptions.day6 && (
                 <div>
                    
                 <p>
                 - Sigiriya & Dambulla <br /><br />
Welcome to Day 2 of your incredible Sri Lankan adventure! Today, we delve deeper into the rich cultural and historical tapestry of Sri Lanka, exploring two of the country’s most iconic landmarks.
Morning: Arrival and Sigiriya Exploration 
Begin your day with a refreshing breakfast at your hotel, then set out to explore Sigiriya, famously known as the "Lion Rock." A UNESCO World Heritage site, Sigiriya Rock Fortress is a magnificent ancient monument offering breathtaking views of the lush landscape below.
<br />•	Hike to Sigiriya Rock Fortress: Embark on a rewarding 30-minute hike to the summit, where you’ll be greeted by spectacular panoramic views of the surrounding countryside. As you ascend, take in the stunning frescoes, intricate water gardens, and the fascinating history of this ancient fortress.
Midday: Dambulla Cave Temple Complex
After your exhilarating hike, we will head to the Dambulla Cave Temple Complex, a historical gem of Sri Lanka. This impressive temple complex, dating back to the 1st century BC, is renowned for its beautifully preserved Buddhist murals and statues.
<br />•	Explore the Caves: Wander through the cave temples adorned with vibrant murals and statues of the Buddha, offering a glimpse into the spiritual and artistic heritage of ancient Sri Lanka.
Afternoon: Check-In and Relax
<br />•	Check-In: Return to your tropical hotel in Dambulla for some well-deserved relaxation. Unwind in your cozy room or take a moment to enjoy the serene surroundings of the hotel.
Evening: Village Walk and Dinner
<br />•	Village Walk: As the evening sets in, take a leisurely walk through the village to experience the local culture and atmosphere. Enjoy the peaceful environment as you reflect on the day’s explorations.
<br />•	Dinner: Return to the hotel for a colorful buffet dinner featuring a delightful array of local and international dishes, offering a feast for both the palate and the eyes.
<br /><br /><b>Activities Summary:</b> <br />
<br />•	Breakfast: Enjoy a delicious breakfast at your hotel
<br />•	Explore: Visit the ancient Sigiriya Rock Fortress
<br />•	Sightseeing: Discover the Dambulla Cave Temple Complex
<br />•	Check-In: Relax at your tropical hotel in Dambulla
<br />•	Dinner: Indulge in a diverse buffet meal at the hotel
<br />•	Relaxation: Take a serene walk through the village
<br />•	Overnight: Rest comfortably at your cozy hotel
Enjoy this day of cultural discovery and natural beauty as you immerse yourself in the rich heritage of Sri Lanka!<br /><br />


<img style={photoStyle} src="https://lahirutours.co.uk/photos/Sigiriya.jpg" alt="" />
                 </p>
               </div>
                )}
              </div>
              <div style={additionalDescriptionStyle}>
                <p>Day 11 & 12 & 13 - Kandy</p>
                <button
                  style={{
                    ...arrowButtonStyle,
                    ...(additionalDescriptions.day7 ? arrowButtonHoveredStyle : {}),
                  }}
                  onClick={() => toggleAdditionalDescription('day7')}
                >
                  {additionalDescriptions.day7 ? '▲ Hide Details' : '▼ Show Details'}
                </button>
                {additionalDescriptions.day7 && (
                  <div>
                    
                    <p>
                    The cultural heart of Sri Lanka, Kandy is surrounded by enchanting green nature and picturesque villages amidst tranquil landscapes. With breathtaking views of the famous Kandy Lake and home to the sacred relic of the Buddhist faith, Kandy is a must-visit destination. Explore the heritage of Sri Lanka’s last kingdom and take a stroll through the stunning Botanical Gardens, created by the British in the 19th century and still one of the most beautiful gardens in Asia. Walk the streets of Kandy, visit the local market, and enjoy performances of traditional Kandyan dances in the evening.
<br /><br />Activities:<br />
•	En route, visit Pinnawala Elephant Orphanage: Witness the care and conservation of elephants at this famous sanctuary.<br />
•	Check in at the beautiful hotel & refresh: Settle into your accommodation and refresh after your journey.<br />
•	Visit the famous Temple of the Tooth in Kandy: Explore one of the most sacred Buddhist sites in Sri Lanka.<br />
•	Enjoy a cultural dance in the evening: Experience the vibrant traditional Kandyan dances.<br />
•	Back to hotel for overnight stay: Relax and unwind in your comfortable hotel room.<br />
•	Enjoy your first Sri Lankan grand dinner buffet at the hotel: Savor a variety of local delicacies at the hotel buffet.<br />
•	Take a walk around the Kandy Lake at night: End your day with a peaceful stroll around the picturesque Kandy Lake.<br />
Enjoy your second day immersed in the cultural and historical richness of Kandy!<br />
<img style={photoStyle} src="https://lahirutours.co.uk/photos/Kandy.jpg" alt="" />
                    </p>
                  </div>
                )}
              </div>
              <div style={additionalDescriptionStyle}>
                <p>Day 14 - Nuwara Eliya</p>
                <button
                  style={{
                    ...arrowButtonStyle,
                    ...(additionalDescriptions.day8 ? arrowButtonHoveredStyle : {}),
                  }}
                  onClick={() => toggleAdditionalDescription('day8')}
                >
                  {additionalDescriptions.day8 ? '▲ Hide Details' : '▼ Show Details'}
                </button>
                {additionalDescriptions.day8 && (
                  <div>
                    
                  <p>
                  Experience the captivating beauty of Sri Lanka on your journey to Nuwara Eliya. This mist-wrapped region, with its emerald peaks and verdant tea plantations, is sure to enchant you. Known as the "Little England" of South Asia, Nuwara Eliya offers a cool climate, scenic views, Tudor-style hotels, manicured hedgerows, and charming gardens. The rolling hills adorned with lush green tea leaves provide a stunning backdrop for your visit. The sound of waterfalls and the cool breeze create a fairytale-like experience that will leave you spellbound.
<br /><br />Activities<br />
•	Wake up to your first morning in paradise.<br />
•	Sip a warm cup of fresh Ceylon tea.<br />
•	Enjoy your first flavorful Sri Lankan breakfast buffet.<br />
•	Check out from the hotel in Kandy.<br />
•	Proceed to Nuwara Eliya (Little England).<br />
•	Stop at local batik and handicraft shops.<br />
•	Sightsee the passing views of tea gardens and waterfalls.<br />
•	Visit a Ceylon tea plantation and tea factory.<br />
•	Check in at the cozy hotel in Nuwara Eliya and relax.<br />
•	Visit Gregory Lake later to soak in the sunset.<br />
•	Walk around chilly "Little England".<br />
<img style={photoStyle} src="https://lahirutours.co.uk/photos/Nuwaraeliya.jpg" alt="" />
                  </p>
                </div>
                )}
              </div>
              <div style={additionalDescriptionStyle}>
                <p>Day 15 - Thissa</p>
                <button
                  style={{
                    ...arrowButtonStyle,
                    ...(additionalDescriptions.day9 ? arrowButtonHoveredStyle : {}),
                  }}
                  onClick={() => toggleAdditionalDescription('day9')}
                >
                  {additionalDescriptions.day9 ? '▲ Hide Details' : '▼ Show Details'}
                </button>
                {additionalDescriptions.day9 && (
                  <div>
                    
                    <p>
                    Thissa, also known as Thissa or Tissa, is a small town in southeastern Sri Lanka, situated near the picturesque Tissamaharama Lake. It serves as a gateway to the Yala National Park, one of the country's premier wildlife reserves, known for its diverse fauna, including elephants, leopards, and various bird species.

The town is named after the ancient city of Tissamaharama, which was an important center of Buddhist culture and civilization in the past. Visitors to Thissa can explore historical sites, such as ancient stupas and ruins, as well as enjoy the natural beauty of the surrounding landscape. The area is popular for eco-tourism, offering opportunities for safari tours, bird watching, and enjoying the serene environment of the lake and its surroundings
<img style={photoStyle} src="https://lahirutours.co.uk/photos/Thissa.jpg" alt="" />
                    </p>
                  </div>
                )}
              </div>
              <div style={additionalDescriptionStyle}>
                <p>Day 16 - Hikkaduwa</p>
                <button
                  style={{
                    ...arrowButtonStyle,
                    ...(additionalDescriptions.day10 ? arrowButtonHoveredStyle : {}),
                  }}
                  onClick={() => toggleAdditionalDescription('day10')}
                >
                  {additionalDescriptions.day10 ? '▲ Hide Details' : '▼ Show Details'}
                </button>
                {additionalDescriptions.day10 && (
                  <div>
                    <p>
                    Hikkaduwa<br />

Hikkaduwa is a charming seaside resort town in southwestern Sri Lanka, renowned for its strong surf and stunning beaches. Palm-dotted Hikkaduwa Beach is lined with a variety of restaurants and bars, making it a lively spot for visitors. The shallow waters opposite the beach house the Hikkaduwa National Park, a coral sanctuary home to marine turtles and exotic fish. Inland, the Gangarama Maha Vihara, a Buddhist temple adorned with hand-painted murals, offers a serene cultural experience.

<br /><br />Activities:<br /><br />

•Enjoy the vibrant atmosphere of Hikkaduwa Beach<br />
•Explore the Hikkaduwa National Park to see coral reefs, marine turtles, and exotic fish<br />
•Visit the Gangarama Maha Vihara temple<br /><br /><br />
<img style={photoStyle} src="https://lahirutours.co.uk/photos/Hikkaduwa.png" alt="" />
                    </p>
                  </div>
                )}
              </div>
              <div style={additionalDescriptionStyle}>
                <p>Day 17 - Bentota</p>
                <button
                  style={{
                    ...arrowButtonStyle,
                    ...(additionalDescriptions.day11 ? arrowButtonHoveredStyle : {}),
                  }}
                  onClick={() => toggleAdditionalDescription('day11')}
                >
                  {additionalDescriptions.day11 ? '▲ Hide Details' : '▼ Show Details'}
                </button>
                {additionalDescriptions.day11 && (
                  <div>
                  <p>
                  <b>Bentota: A Tropical Paradise</b><br />
Welcome to Bentota, the jewel of Sri Lanka's southern coast and the ultimate destination for ocean enthusiasts! As part of our Sri Lanka holiday package, Bentota offers an idyllic blend of sun, sea, and adventure that promises to make your tropical dreams come true.
<br /><b>Morning:</b> <br />
•	Start your day with a refreshing cup of Ceylon tea as you gaze out at the Indian Ocean. <br />
•	Indulge in a hearty breakfast featuring the freshest seafood from the Indian Ocean.<br />
<b>Late Morning:</b><br />
•	Embark on a captivating boat ride through Madu River’s mangrove forests, enjoying the serene natural beauty and diverse wildlife.<br />
<b>Afternoon:</b><br />
•	Take a leisurely swim in the warm, inviting waters of the Indian Ocean.<br />
•	Relax on the beach, soaking up the sun and enjoying the tranquil seaside ambiance.<br />
<b>Evening:</b><br />
•	Don’t miss the breathtaking sunset over the horizon, a perfect end to your day in paradise.<br />
<b>End of Day:</b><br />
•	Relax at your beach hotel and prepare for the next leg of your Sri Lankan adventure.<br /><br />
<b>Highlights of Your Bentota Experience</b><br />
•	Explore the golden sands and crystal-clear waters of Bentota Beach.<br />
•	Engage in thrilling water sports at Madu River.<br />
•	Discover the traditional art of stilt fishing.<br />
•	Enjoy a seafood BBQ dinner on the beach.<br />
•	Witness the beauty of a sunset over the Indian Ocean.<br />
This day in Bentota offers a perfect blend of relaxation, adventure, and cultural experiences, making it a highlight of your Sri Lankan getaway.<br /><br /><br />
<img style={photoStyle} src="https://lahirutours.co.uk/photos/Bentota.jpg" alt="" />
                  </p>
                </div>
                )}
              </div>
              <div style={additionalDescriptionStyle}>
                <p>Day 18 - Colombo City</p>
                <button
                  style={{
                    ...arrowButtonStyle,
                    ...(additionalDescriptions.day12 ? arrowButtonHoveredStyle : {}),
                  }}
                  onClick={() => toggleAdditionalDescription('day12')}
                >
                  {additionalDescriptions.day12 ? '▲ Hide Details' : '▼ Show Details'}
                </button>
                {additionalDescriptions.day12 && (
                  <div>
                    
                    Proceed to the airport in time to connect with the departure flight.
                    
                  </div>
                  
                  
                )}
                
            
              </div>
              
            </div>
            
          
            <div>
            <Link to="/BookingForm" style={bookbuttonstyle2}> <b>Book Now</b></Link>
            </div>
        </section>
        
      </main>
      <button
          onClick={handleToggleForm}
          style={{
            position: 'fixed',
            top: '200px',
            right: '00px',
            backgroundColor: '#4682B4',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            zIndex: '1000',
          }}
        >
          {isformvisible ? <FontAwesomeIcon  icon={faEnvelopeOpen} size="2x" /> : <FontAwesomeIcon  icon={faEnvelope} size="2x" />}<br /> Contact US
        </button>
        <form style={formStyle}  onSubmit={handleSubmit}>
          <h2 style={h2Style}>Contact Us</h2>
          <label style={labelStyle} htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            required
          />
          <label style={labelStyle}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
          <label style={labelStyle}>Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle}
            required
          />
          <label style={labelStyle}>Subject:</label>
          <textarea
            id="subject"
            value={subject}
            onChange={(e) => setsubject(e.target.value)}
            style={inputStyle}
            required
          ></textarea>
          <label style={labelStyle}>Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={textareaStyle}
            required
          ></textarea>
          <button onClick={showAlert} type="submit" style={buttonStyle}>Inquiry</button>
        </form> 
      
        <footer style={footerStyle}>
        <div style={footerSectionStyle}>
          <h4 style={footerSectionTitleStyle}>Relaxing</h4>
          <ul style={footerListStyle}>
            <li style={footerListItemStyle}>Hikkaduwa Beach</li>
            <li style={footerListItemStyle}>Galle fort</li>
            <li style={footerListItemStyle}>Negambo Beach</li>
            <li style={footerListItemStyle}>Peradeniya Botnical</li>
            <li style={footerListItemStyle}>Tangalla</li>
          </ul>
        </div>
        <div style={footerSectionStyle}>
          <h4 style={footerSectionTitleStyle}>Ancient Places</h4>
          <ul style={footerListStyle}>
            <li style={footerListItemStyle}>Sigiriya</li>
            <li style={footerListItemStyle}>Anuradhapura</li>
            <li style={footerListItemStyle}>Polonnaruwa</li>
          </ul>
        </div>
        <div style={footerSectionStyle}>
          <h4 style={footerSectionTitleStyle}>Become Our Friend</h4>
          <ul style={footerListStyle}>
            <li style={footerListItemStyle}><a href="https://www.facebook.com/share/TLHsJswwmcxzvuiA/?mibextid=WC7FNe" style={socialLinkStyle}>Facebook</a></li>
            <li style={footerListItemStyle}><a href="https://www.instagram.com/lahiru_tours_sri_lanka?igsh=azYyenZxaHZ6aW1y&utm_source=qr" style={socialLinkStyle}>Instagram</a></li>
          </ul>
        </div>
        <div style={footerSectionStyle}>
          <h4 style={footerSectionTitleStyle}>Contact Us</h4>
          
          <p><u>
            info@lahirutours.co.uk<br />
            admin@lahirutours.co.uk <br />
            payments@lahirutours.co.uk <br />
           </u>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Days182;
