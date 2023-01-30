Reference Doc : https://www.joshwcomeau.com/react/why-react-re-renders/

In react data always flows down. It means the State used for components will impact only the state component and its descendants. React will
do UI Change based on the state changes.
React always re-renders when state changes. Most of the time state are passed as props to the child component. Hence, state changes in parent component triggers a change in child component. It doesn't mean the child component re-rendered because of prop change. It is actually state change in parent component.
To avoid unwanted re-rendering for presentation components ie to trigger render only when props change can be done using React.Memo.
But we need to be careful by comparing the execution time of re-rendering, execution time of momozisation calculation.
React usually re-renders the parent and child components without doing momisation by default as children components can be Impure by having code like new Date(). If we prevent re-rendering for impure components, we end up showing stale data to customers.

What memorization will do?
What re-rendering will do?
