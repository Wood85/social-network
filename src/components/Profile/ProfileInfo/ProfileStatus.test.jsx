import React from "react"
import { create } from "react-test-renderer"
import ProfileStatus from "./ProfileStatus"

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status='it-status' />)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('it-status')
    })

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status='it-status' />)
        const root = component.root
        const span = root.findByType('span')
        expect(span).not.toBeNull()
    })

    test("after creation <input/> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status='it-status' />)
        const root = component.root
        expect(()=>{
            const input = root.findByType('input')
        }).toThrow()
    })

    test("after creation span should contain correct status", () => {
        const component = create(<ProfileStatus status='it-status' />)
        const root = component.root
        const span = root.findByType('span')
        expect(span.children[0]).toBe('it-status')
    })

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status='it-status' />)
        const root = component.root
        const span = root.findByType('span')
        span.props.onDoubleClick()
        const input = root.findByType('input')
        expect(input.props.value).toBe('it-status')
    })

})