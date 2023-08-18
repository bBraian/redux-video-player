import { describe, expect, it } from 'vitest'
import { player as reducer, play, next, PlayerState } from './player'

const exampleState: PlayerState = {
    course: {
        id: 1,
        modules: [{ id: 1, title: 'Iniciando com React', lessons: [{ id: 'Pj8dPeameYo', title: 'CSS Global', duration: '03:23' }, { id: '8KBq2vhwbac', title: 'Form de comentários', duration: '11:34' },], }, { id: 2, title: 'Estrutura da aplicação', lessons: [{ id: 'h5JA3wfuW1k', title: 'Interações no JSX', duration: '06:33' }, { id: '1G0vSTqWELg', title: 'Utilizando estado', duration: '09:12' },], },]
    },
    currentModuleIndex: 0,
    currentLessonIndex: 0
}

describe('player slice', () => {
    it('should be able to play', () => {
        const state = reducer(exampleState, play([1, 2]))

        expect(state.currentModuleIndex).toEqual(1)
        expect(state.currentLessonIndex).toEqual(2)
    })

    it('should be able to play the next video automatically', () => {
        const state = reducer(exampleState, next())

        expect(state.currentModuleIndex).toEqual(0)
        expect(state.currentLessonIndex).toEqual(1)
    })

    it('should be able to jump the next module automatically', () => {
        const state = reducer({...exampleState, currentLessonIndex: 1}, next())

        expect(state.currentModuleIndex).toEqual(1)
        expect(state.currentLessonIndex).toEqual(0)
    })

    it('should not update the current module and lesson index if there is no next lesson available', () => {
        const state = reducer({...exampleState, currentLessonIndex: 1, currentModuleIndex: 1}, next())

        expect(state.currentModuleIndex).toEqual(1)
        expect(state.currentLessonIndex).toEqual(1)
    })
})
  