import Header from './component/Header' 
import Breadcrumb from './component/Breadcrumb'
import Cards from './component/Cards'
import Aside from './component/Aside'
import Table from './component/Table'

const App = () => {
  return (
    <div className="w-full h-full box-border bg-gray-50">
      <Header />
      <Breadcrumb />
      <div className="flex px-10 mt-10">
        <Cards />
      </div>
      <div className="row md:w-full px-10 my-5">
       <div className="col-lg-3 col-md-12 col-sm-6 p-0 ..."><Aside /></div>
       <div className="col-lg-9 col-md-12 col-sm-12 p-0 ..."><Table /></div>
      </div>
    </div>
  );
}

export default App;
