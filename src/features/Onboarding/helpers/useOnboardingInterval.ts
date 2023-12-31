import {useEffect, useRef, useState} from 'react'

type UseOnboardingIntervalType = {
  stepDuration: number
  numberOfSteps: number
  onFinishCallback: () => void
}

function useOnboardingInterval({
  numberOfSteps,
  stepDuration,
  onFinishCallback,
}: UseOnboardingIntervalType) {
  const interval = useRef<NodeJS.Timeout>()
  const [step, setStep] = useState(0)

  const goToNextStep = () => setStep(step => step + 1)

  const setOnboardingInterval = () => {
    if (step >= numberOfSteps) return
    interval.current = setInterval(() => {
      setStep(step => step + 1)
    }, stepDuration)
  }

  const clearOnboardingInterval = () => clearInterval(interval.current)

  useEffect(() => {
    if (step === 0) {
      setOnboardingInterval()
    }
    if (step > numberOfSteps) {
      clearOnboardingInterval()
      onFinishCallback && onFinishCallback()
    }
  }, [step])

  return {
    step,
    goToNextStep,
    clearOnboardingInterval,
    setOnboardingInterval,
  }
}

export default useOnboardingInterval
