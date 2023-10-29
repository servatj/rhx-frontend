import FeatureBox from './FeatureBox';
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className="">
    <h2 className="text-2xl font-semibold mb-6 text-left">
      What you want to do today?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Link to='/cover'>
        <FeatureBox title={'Create a perfect cover letter'} description={'Answer few questions or provide your cv, It can even adapt the tone and style based on the company s culture'}/>
      </Link>
    </div>
  </section>
  )
}

export default Features;
