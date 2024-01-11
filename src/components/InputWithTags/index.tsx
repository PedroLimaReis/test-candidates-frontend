import React, { useState } from 'react'

import {
  Container,
  TagsContainer,
  Tag,
  InputContainer,
  TextExcludedTag,
} from './styles'
import Input from '../Input'
import Button from '../Button'

type Props = {
  label: string
  name: string
  tags: string[]
  setTags: (value: string[]) => void
}

const InputWithTags = ({ label, name, tags, setTags }: Props) => {
  const [input, setInput] = useState('')

  const removeTags = (indexToRemove: number) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)])
  }

  const addTags = () => {
    if (input !== '') {
      setTags([...tags, input])
      setInput('')
    }
  }

  return (
    <Container>
      {tags.length > 0 && (
        <TagsContainer>
          {tags.map((tag, index) => (
            <Tag key={index}>
              <span>{tag}</span>
              <TextExcludedTag onClick={() => removeTags(index)}>
                x
              </TextExcludedTag>
            </Tag>
          ))}
        </TagsContainer>
      )}
      <InputContainer>
        <Input label={label} name={name} value={input} onChange={setInput} />
        <Button onClick={addTags}>+</Button>
      </InputContainer>
    </Container>
  )
}

export default InputWithTags
