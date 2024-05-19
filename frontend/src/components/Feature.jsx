import React from 'react'

const Feature = () =>{
  return(
    <div className=" py-20">
      <div className="container mx-auto">
        {/* <h2 className="text-3xl font-bold mb-10 text-center">Features</h2> */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <img src="/qr-code_5227752-removebg-preview.png" width='100' height='100' alt="Feature 1" className="mb-4" />
            <h3 className='font-bold text-white text-xl'>QR Code Payment</h3>
            <p className="text-sm text-justify text-white">
                LitePay revolutionizes your travel experience by allowing you to make quick and secure payments to drivers using QR codes. Simply scan the QR code displayed by the driver, and you are all set to enjoy your journey hassle-free.
            </p>
          </div>
          {/* Feature 2 */}
          {/* <div className="flex flex-col items-center">
            <img src="/pay_625599-removebg-preview.png" alt="Feature 2" width="100" height="100" className="mb-4" />
            <h3 className='font-bold text-white text-xl'>Cashless Convenience</h3>
            <p className="text-lg text-center text-white">Experience the convenience of cashless payments with LitePay. No need to worry about carring cash or dealing with loose change. With our app, you can pay for your shuttle or bus ride effortlessly, making your travel experience smoother and more enjoyable.</p>
          </div> */}
          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <img src="/delivery_2945694-removebg-preview.png" width='100' height='100' alt="Feature 3" className="mb-4" />
            <h3 className='font-bold text-white text-xl'>Real-Time Tracking</h3>
            <p className="text-sm text-justify text-white">
              Our intuitive admin dashboard enables you to track shuttle and bus locations in real-time, ensuring you're always aware of your vehicle's whereabout and arrival time.
            </p>
          </div>
          {/* Feature 4 */}
          {/* <div className="flex flex-col items-center">
            <img src="/people_1576504-removebg-preview.png" width='100' height='100' alt="Feature 4" className="mb-4" />
            <h3 className='font-bold text-white text-xl'>Driver Management</h3>
            <p className="text-lg text-center text-white">
              Our admin panel allows you to easily add and manage drivers, ensuring a reliable and efficient transport service for passengers. Say hello to seamless driver management.
            </p>
          </div> */}
          {/* Feature 4 */}
          {/* <div className="flex flex-col items-center">
            <img src="/route-management.png" width='100' height='100' alt="Feature 4" className="mb-4" />
            <h3 className='font-bold text-white text-xl'>Route Management</h3>
            <p className="text-lg text-center text-white">
              With LitePay, you can effortlessly add and manage routes for your shuttle or bus network. whether it's updating existing routes or adding new ones, our platform makes route management a breeze.  
            </p>
          </div> */}
          {/* Feature 4 */}
          <div className="flex flex-col items-center">
            <img src="/secure-payment.png" width='100' height='100' alt="Feature 4" className="mb-4" />
            <h3 className='font-bold text-white text-xl'>Secure Payment</h3>
            <p className="text-sm text-justify text-white">
              LitePay employs advanced encryption technology to ensure that your transaction are secure and your personal information is protected. Travel with peace of mind knowing that your payments are safe and secure.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col items-center">
            <img src="/user-friendly.png" width='100' height='100' alt="Feature 4" className="mb-4" />
            <h3 className='font-bold text-white text-xl'>User-friendly Interface</h3>
            <p className="text-sm text-justify text-white">
              Whether you are a passenger making payment or an admin managing your fleet, our intuitive interface makes navigation a breeze.Enjoy a seamless user experience everytime you use LitePay.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col items-center">
            <img src="/support_3249904-removebg-preview.png" width='100' height='100'alt="Feature 4" className="mb-4" />
            <h3 className='font-bold text-white text-xl'>24/7 Customer Support</h3>
            <p className="text-sm text-justify text-white">Need assistance? We've got you covered! LitePay offers 24/7 customer support to address any questions or concerns you may have. our dedicated support team is here to ensure that your LitePay experience is nothing short of exceptional.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature

