import {
  Pressable,
  Text,
  type PressableProps
} from 'react-native'

interface Props extends PressableProps {
  children: string
  color?: 'primary' | 'secondary' | 'tertiary'
}

export function CustomButton({
  children,
  color = 'primary',
  className,
  ...rest
}: Props) {
  const btnColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary'
  }[color]

  return (
    <Pressable {...rest} className={`p-3 rounded-md active:opacity-90 ${btnColor} ${className}`}>
      <Text className='text-white text-center'>
        {children}
      </Text>
    </Pressable>
  )
}
