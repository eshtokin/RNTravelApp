import {useCallback, useEffect, useRef, useState} from 'react'

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

  const goToNextStep = () => setStep(s => s + 1)

  const setOnboardingInterval = useCallback(() => {
    if (step >= numberOfSteps) {
      return
    }
    interval.current = setInterval(() => {
      setStep(s => s + 1)
    }, stepDuration)
  }, [numberOfSteps, step, stepDuration])

  const clearOnboardingInterval = () => clearInterval(interval.current)

  useEffect(() => {
    if (step === 0) {
      setOnboardingInterval()
    }
    if (step > numberOfSteps) {
      clearOnboardingInterval()
      onFinishCallback && onFinishCallback()
    }
  }, [numberOfSteps, onFinishCallback, setOnboardingInterval, step])

  return {
    step,
    goToNextStep,
    clearOnboardingInterval,
    setOnboardingInterval,
  }
}

export default useOnboardingInterval
