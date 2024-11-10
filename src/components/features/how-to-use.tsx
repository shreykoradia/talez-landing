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
          <video controls width="80%">
            <source
              src="https://okdzjuoetzaksmtskopv.supabase.co/storage/v1/object/sign/Talez%20Demo/Talez%20-%2021%20October%202024.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJUYWxleiBEZW1vL1RhbGV6IC0gMjEgT2N0b2JlciAyMDI0Lm1wNCIsImlhdCI6MTczMTI0MTA2OCwiZXhwIjoxMDM3MTE1NDY2OH0.qxFJCDAyTCKtMPY5L_Y21qranu2PvDjAS0QWSG3phJY&t=2024-11-10T12%3A17%3A52.088Z"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
    </>
  );
};

export default HowToUse;
