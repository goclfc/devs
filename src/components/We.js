const We = () => {
  return (
    <div className="we w-full flex flex-col text-white text-xl p-4">
      <h1 className="text-white text-3xl">Who we are</h1>
      <div>
        <p className="m-2">
          We are web developers team, we love coding, creating web or mobile
          aplications demanding on bussiness interest.
        </p>
      </div>
      <div style={{borderBottom:'1px solid white'}}>
        <h2 className="text-3xl mb-4">Main team</h2>
        <div className="mb-4"> 
            <h2 className="text-2xl mt-2 mb-2">George Daraselia</h2>
            <p>Back end developer, currently working in Walt disnay company as senior back-end developer</p>
        </div>
        <div className="mb-4">
            <h2 className="text-2xl mt-2 mb-2">George Takadze</h2>
            <p>Dev ops, Ai developer,Machine Learning, currently working in IDK company as senior back-end developer</p>
        </div>
        <div className="mb-4">
            <h2 className="text-2xl mt-2 mb-2">Gocha Berulava</h2>
            <p>Front end developer, currently working in BSG company as senior Front-end developer</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-wrap">
          <h2 className="text-2xl text-white w-full m-2">What we love to do</h2>
          <p className="mr-2">
            You know what you want, You have technical documentation, you have
            ui/ux design
          </p>
          : <p className="ml-2 text-green-300">We do our job </p>
        </div>
        <div className="flex flex-wrap">
          <h2 className="text-2xl text-white w-full m-2">What we can do</h2>
          <p>You know what you want, have clear bussiness idea</p>
          <p>We create technical documentation, ui/ux design</p> : <p className="ml-2 text-green-300">We do our job</p>
        </div>
        <div className="flex flex-wrap">
          <h2 className="text-2xl text-white w-full m-2">What we can not do</h2>
          <p className="mr-2">You dont have bussiness plan</p> : <p className="ml-2 text-red-300">We can do nothing</p>
        </div>
      </div>
    </div>
  );
};
export default We;
