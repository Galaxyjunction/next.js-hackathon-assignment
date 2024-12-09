const FooterLinks = ({ name }: { name: string }) => {
    return (
      <p className="font-satoshi font-normal leading-[18.9px] text-white hover:underline py-2 md:py-4 md:text-xl">
        {name}
      </p>
    );
  };
  
  export default FooterLinks;