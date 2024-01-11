import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 16,
  width: '100%',
})

export const TagsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 16,
  width: '100%',
  marginLeft: 24,
})

export const TextExcludedTag = styled('i', {
  cursor: 'pointer',
})

export const Tag = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  padding: 8,
  backgroundColor: '#2B50AA',
  borderRadius: 3,
  color: '#d1d1d1',
})

export const Label = styled('label', {})

export const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  gap: 8,
  width: '100%',
})

export const InputText = styled('input', {
  cursor: 'text',
  fontSize: 14,
  width: '80%',
  lineHeight: 12,
  padding: 4,
  paddingLeft: 12,
  height: 48,
  backgroundColor: 'White',
  border: 1,
  borderRadius: 3,
  overflow: 'hidden',
  marginLeft: 24,
  gap: 24,
})
