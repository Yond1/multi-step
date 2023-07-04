import { FC } from "react"
import Step from "../../UI/Step/Step"

const StepCard:FC = () => {

    const step = [
        {id:1,  title: 'your info'},
        {id:12, title: 'select plan'},
        {id:13, title: 'add-ons'},
        {id:14, title: 'summary'},
    ]

  return (
    <section className="step-card">
        {step.map((item, indx) => {
            return (
                <Step key={item.title} title={item.title} index={indx + 1} />
            )
        })}
    </section>
  )
}

export default StepCard