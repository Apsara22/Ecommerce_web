import img1 from "../assets/img1.jpg"
export default function Profile(){
    return(
        <>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-44 p-2">
        <div className="pl-20 ">
            <h1 className="text-3xl py-5">I am Apsara Paneru <br />
            To the <span className="text-orange-600">MERN STACK</span> Developer</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis possimus odio cupiditate laudantium eveniet nostrum,
            doloribus beatae? Iusto architecto distinctio sed minus enim,
            voluptas consequatur harum explicabo. Asperiores, quo consequuntur?
          </p>
        </div>
        <div className=" pt-16 pl-12">
          <img src={img1} alt=""  className="rounded-full h-52 w-52 "/>
        </div>
      </div>
        </>
    )
}