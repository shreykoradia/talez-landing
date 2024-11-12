const HowToUse = () => {
  return (
    <>
      <section className="py-28 bg-background">
        <div className="flex flex-col gap-2 justify-center items-center w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Grab a demo video on How to use{" "}
              <span className="text-primary">Talez....</span>!
            </h2>
          </div>
          <iframe
            className="md:max-w-screen-md  md:w-full h-80"
            src="https://www.youtube.com/embed/kFKLDYhXsIo?si=1T-R7ndk5Cvx2oyq"
            title="Developer app Talez featured on Proxlight"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default HowToUse;
