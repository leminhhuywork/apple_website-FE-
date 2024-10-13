import { Environment, Lightformer } from "@react-three/drei";

const Lights = () => {
    return (

        <group name="lights">

            <Environment resolution={256}>
                <group>

                    <Lightformer
                        form="rect"
                        intensity={10}
                        position={[-1, 0, -10]}
                        scale={10}
                        color={"#495057"}
                    />
                    <Lightformer
                        form="rect"
                        intensity={10}
                        position={[-10, 2, 1]}
                        scale={10}
                        rotation-y={Math.PI / 2}
                    />
                    <Lightformer
                        form="rect"
                        intensity={10}
                        position={[10, 0, 1]}
                        scale={10}
                        rotation-y={Math.PI / 2}
                    />
                </group>
            </Environment>


            <spotLight
                position={[-2, 10, 5]}
                angle={0.15}
                penumbra={1}//penumbra là vùng biên mờ của bóng đổ từ nguồn sáng điểm
                decay={0}// mức độ ánh sáng mờ đi khi di chuyển xa khỏi nguồn sáng
                intensity={Math.PI * 0.2}// cường độ ánh sáng
                color={"#f8f9fa"}
            />
            <spotLight
                position={[0, -25, 10]}
                angle={0.15}
                penumbra={1}
                decay={0}
                intensity={Math.PI * 0.2}
                color={"#f8f9fa"}
            />
            <spotLight
                position={[0, 15, 5]}
                angle={0.15}
                penumbra={1}
                decay={0.1}
                intensity={Math.PI * 3}
            />
        </group>
    );
};

export default Lights;