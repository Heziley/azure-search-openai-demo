import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What are some recent innovation news from Laing O'Rourke Australia?",
        value: "What are some recent innovation news from Laing O'Rourke Australia?"
    },
    { text: "How is LOR investing in diversity and inclusion?", value: "How is LOR investing in diversity and inclusion?" },
    { text: "How is LOR AU hitting its sustianability targets?", value: "How is LOR AU hitting its sustianability targets?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
