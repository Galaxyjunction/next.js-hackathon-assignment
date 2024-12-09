const FooterHeading = ({ name }: { name: string }) => {
    return (
      <h5 className="font-clash text-lg tracking-wide text-white font leading-[19.68px] pb-1 md:pb-2 md:text-2xl">
        {name}
      </h5>
    );
  };
  
  export default FooterHeading;