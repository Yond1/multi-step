import Layout from "../UI/Layout/Layout"
import Sample from "../UI/Sample/Sample"
import StepCard from "../Main/StepCard/StepCard"
import FormWrapper from "../UI/FormWrapper/FormWrapper"
import PersonalInfo from "../Main/PersonalInfo/PersonalInfo"
import { useAppSelector } from "../helpers/hooks"
import SelectPlan from "../Main/SelectPlan/SelectPlan"
import PickAddons from "../Main/PickAddons/PickAddons"
import FinishingUp from "../Main/FinishingUp/FinishingUp"
import ThankYou from "../Main/ThankYou/ThankYou"


const App = () => {

  const pageNumber = useAppSelector(store => store.pageNumber.currentPage)

  return (
    <Layout>
      <Sample>
        <StepCard />
        <FormWrapper pageNumber={pageNumber}>
          {pageNumber === 1 && <PersonalInfo/>}
          {pageNumber === 2 && <SelectPlan/>}
          {pageNumber === 3 && <PickAddons/>}
          {pageNumber === 4 && <FinishingUp/>}
          {pageNumber === 5 && <ThankYou/>}
        </FormWrapper>
      </Sample>
    </Layout>
  )
}

export default App