import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Galaxy(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF("/models/galaxy.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]].play();
  }, [names[0]]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.087}
        >
          <group name="5b8b67cd62cb4dfebc02307980da792dabccleanermaterialmergergles">
            <group name="Object_2" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_3">
                <group
                  name="Object_4"
                  position={[0, 0.042, 0]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                >
                  <group name="Object_5" position={[0, 0, -51.1]}>
                    <group name="TimeframeMainGroup_19">
                      <group name="Object_7">
                        <mesh
                          name="Cylinder001Shape_3_0"
                          geometry={nodes.Cylinder001Shape_3_0.geometry}
                          material={materials.Cylinder001Shape}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="Object_9"
                  position={[0, -0.112, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                >
                  <group name="Object_10" position={[0, 0, -51.1]}>
                    <group name="TimeframeMainGroup_20">
                      <group name="Object_12">
                        <mesh
                          name="Cylinder002Shape_7_0"
                          geometry={nodes.Cylinder002Shape_7_0.geometry}
                          material={materials.Cylinder002Shape}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="Object_14"
                  position={[0.079, -30, 0.044]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.545, 0.545, 1]}
                >
                  <group name="TimeframeMainGroup">
                    <group name="Object_16">
                      <mesh
                        name="Cylinder004Shape_12_0"
                        geometry={nodes.Cylinder004Shape_12_0.geometry}
                        material={materials.Cylinder004Shape}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_18"
                  position={[0, -0.053, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                >
                  <group name="Object_19" position={[0, 0, -51.1]}>
                    <group name="TimeframeMainGroup_21">
                      <group name="Object_21">
                        <mesh
                          name="Cylinder005Shape_16_0"
                          geometry={nodes.Cylinder005Shape_16_0.geometry}
                          material={materials.Cylinder005Shape}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="Object_23"
                  position={[0, -0.251, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_24" position={[0, 0, -51.1]}>
                    <group name="TimeframeMainGroup_22">
                      <group name="Object_26">
                        <mesh
                          name="Cylinder006Shape_20_0"
                          geometry={nodes.Cylinder006Shape_20_0.geometry}
                          material={materials.Cylinder006Shape}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="Object_28"
                  position={[0, 0.141, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                >
                  <group name="Object_29" position={[0, 0, -51.1]}>
                    <group name="TimeframeMainGroup_23">
                      <group name="Object_31">
                        <mesh
                          name="Cylinder008Shape_24_0"
                          geometry={nodes.Cylinder008Shape_24_0.geometry}
                          material={materials.Cylinder008Shape}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="Object_33"
                  position={[0, 0.362, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                >
                  <group name="Object_34" position={[0, 0, -51.1]}>
                    <group name="TimeframeMainGroup_24">
                      <group name="Object_36">
                        <mesh
                          name="Cylinder009Shape_28_0"
                          geometry={nodes.Cylinder009Shape_28_0.geometry}
                          material={materials.Cylinder009Shape}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="Object_38"
                  position={[0.079, -30, 0.044]}
                  rotation={[-Math.PI / 2, 0, -2.378]}
                  scale={[0.545, 0.545, 1]}
                >
                  <group name="TimeframeMainGroup_1">
                    <group name="Object_40">
                      <mesh
                        name="Cylinder011Shape_31_0"
                        geometry={nodes.Cylinder011Shape_31_0.geometry}
                        material={materials.Cylinder011Shape}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_42"
                  position={[0.079, -30, 0.044]}
                  rotation={[-1.401, 0.086, -2.205]}
                  scale={[0.545, 0.545, 0.78]}
                >
                  <group name="TimeframeMainGroup_2">
                    <group name="Object_44">
                      <mesh
                        name="Cylinder013Shape_34_0"
                        geometry={nodes.Cylinder013Shape_34_0.geometry}
                        material={materials.Cylinder013Shape}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_46"
                  position={[0.079, -30, 0.044]}
                  rotation={[-1.253, 0.09, -2.593]}
                  scale={[0.379, 0.379, 1.446]}
                >
                  <group name="TimeframeMainGroup_3">
                    <group name="Object_48">
                      <mesh
                        name="Cylinder015Shape_37_0"
                        geometry={nodes.Cylinder015Shape_37_0.geometry}
                        material={materials.Cylinder015Shape}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_50"
                  position={[0, 0.467, 0]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                >
                  <group name="Object_51" position={[0, 0, -51.1]}>
                    <group name="TimeframeMainGroup_25">
                      <group name="Object_53">
                        <mesh
                          name="Cylinder017Shape_41_0"
                          geometry={nodes.Cylinder017Shape_41_0.geometry}
                          material={materials.Cylinder017Shape}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="Object_55"
                  position={[0, 0.256, 0]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                >
                  <group name="Object_56" position={[0, 0, -51.1]}>
                    <group name="TimeframeMainGroup_26">
                      <group name="Object_58">
                        <mesh
                          name="Cylinder018Shape_45_0"
                          geometry={nodes.Cylinder018Shape_45_0.geometry}
                          material={materials.Cylinder018Shape}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="Object_60"
                  position={[0.079, -30, 0.044]}
                  rotation={[-Math.PI / 2, 0, -2.542]}
                  scale={[0.545, 0.545, 1]}
                >
                  <group name="TimeframeMainGroup_4">
                    <group name="Object_62">
                      <mesh
                        name="Cylinder019Shape_48_0"
                        geometry={nodes.Cylinder019Shape_48_0.geometry}
                        material={materials.Cylinder019Shape}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_64"
                  position={[0.079, -30, 0.044]}
                  rotation={[-Math.PI / 2, 0, 2.378]}
                  scale={[0.545, 0.545, 1]}
                >
                  <group name="TimeframeMainGroup_5">
                    <group name="Object_66">
                      <mesh
                        name="Cylinder020Shape_51_0"
                        geometry={nodes.Cylinder020Shape_51_0.geometry}
                        material={materials.Cylinder020Shape}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_68"
                  position={[0.079, -30, 0.044]}
                  rotation={[-1.408, -0.066, -0.766]}
                  scale={[0.545, 0.545, 0.78]}
                >
                  <group name="TimeframeMainGroup_6">
                    <group name="Object_70">
                      <mesh
                        name="Cylinder021Shape_54_0"
                        geometry={nodes.Cylinder021Shape_54_0.geometry}
                        material={materials.Cylinder021Shape}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_72"
                  position={[0.079, -30, 0.044]}
                  rotation={[-1.862, 0.057, 2.759]}
                  scale={[0.379, 0.379, 1.446]}
                >
                  <group name="TimeframeMainGroup_7">
                    <group name="Object_74">
                      <mesh
                        name="Cylinder022Shape_57_0"
                        geometry={nodes.Cylinder022Shape_57_0.geometry}
                        material={materials.Cylinder022Shape}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_76"
                  position={[0.079, 20, 0.044]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.545, 0.545, 1]}
                >
                  <group name="TimeframeMainGroup_8">
                    <group name="Object_78">
                      <mesh
                        name="Cylinder023Shape_60_0"
                        geometry={nodes.Cylinder023Shape_60_0.geometry}
                        material={materials.Cylinder023Shape}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_80"
                  position={[0.079, 20, 0.044]}
                  rotation={[Math.PI / 2, 0, -2.378]}
                  scale={[0.545, 0.545, 1]}
                >
                  <group name="TimeframeMainGroup_9">
                    <group name="Object_82">
                      <mesh
                        name="Cylinder024Shape_63_0"
                        geometry={nodes.Cylinder024Shape_63_0.geometry}
                        material={materials.Cylinder024Shape}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_84"
                  position={[0.079, 20, 0.044]}
                  rotation={[1.401, -0.086, -2.205]}
                  scale={[0.545, 0.545, 0.78]}
                >
                  <group name="TimeframeMainGroup_10">
                    <group name="Object_86">
                      <mesh
                        name="Cylinder025Shape_66_0"
                        geometry={nodes.Cylinder025Shape_66_0.geometry}
                        material={materials.Cylinder025Shape}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_88"
                  position={[0.079, 20, 0.044]}
                  rotation={[1.888, 0.09, -2.593]}
                  scale={[0.379, 0.379, 1.446]}
                >
                  <group name="TimeframeMainGroup_11">
                    <group name="Object_90">
                      <mesh
                        name="Cylinder026Shape_69_0"
                        geometry={nodes.Cylinder026Shape_69_0.geometry}
                        material={materials.Cylinder026Shape}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_92"
                  position={[0.079, 20, 0.044]}
                  rotation={[Math.PI / 2, 0, -2.542]}
                  scale={[0.545, 0.545, 1]}
                >
                  <group name="TimeframeMainGroup_12">
                    <group name="Object_94">
                      <mesh
                        name="Cylinder027Shape_72_0"
                        geometry={nodes.Cylinder027Shape_72_0.geometry}
                        material={materials.Cylinder027Shape}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_96"
                  position={[0.079, 20, 0.044]}
                  rotation={[Math.PI / 2, 0, 2.378]}
                  scale={[0.545, 0.545, 1]}
                >
                  <group name="TimeframeMainGroup_13">
                    <group name="Object_98">
                      <mesh
                        name="Cylinder028Shape_75_0"
                        geometry={nodes.Cylinder028Shape_75_0.geometry}
                        material={materials.Cylinder028Shape}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_100"
                  position={[0.079, 20, 0.044]}
                  rotation={[1.408, 0.066, -0.766]}
                  scale={[0.545, 0.545, 0.78]}
                >
                  <group name="TimeframeMainGroup_14">
                    <group name="Object_102">
                      <mesh
                        name="Cylinder029Shape_78_0"
                        geometry={nodes.Cylinder029Shape_78_0.geometry}
                        material={materials.Cylinder029Shape}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_104"
                  position={[0.079, 20, 0.044]}
                  rotation={[1.862, -0.057, 2.759]}
                  scale={[0.379, 0.379, 1.446]}
                >
                  <group name="TimeframeMainGroup_15">
                    <group name="Object_106">
                      <mesh
                        name="Cylinder030Shape_81_0"
                        geometry={nodes.Cylinder030Shape_81_0.geometry}
                        material={materials.Cylinder030Shape}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_112"
                  position={[0, -0.188, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_113" position={[0, 0, -51.1]}>
                    <group name="TimeframeMainGroup_27">
                      <group name="Object_115">
                        <mesh
                          name="Cylinder031Shape_88_0"
                          geometry={nodes.Cylinder031Shape_88_0.geometry}
                          material={materials.Cylinder031Shape}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="Object_117"
                  position={[0, 0.492, 0]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                >
                  <group name="Object_118" position={[0, 0, -51.1]}>
                    <group name="TimeframeMainGroup_28">
                      <group name="Object_120">
                        <mesh
                          name="Cylinder032Shape_92_0"
                          geometry={nodes.Cylinder032Shape_92_0.geometry}
                          material={materials.Cylinder032Shape}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="Object_122" rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_123" position={[-40, 0, 0]}>
                    <group name="TimeframeMainGroup_29">
                      <group name="Object_125">
                        <mesh
                          name="Sphere002Shape_96_0"
                          geometry={nodes.Sphere002Shape_96_0.geometry}
                          material={materials.Sphere002Shape}
                        />
                      </group>
                    </group>
                  </group>
                  <group name="Object_127" position={[-40, 0, 0]}>
                    <group name="Object_128" position={[-3.42, 0, 0]}>
                      <group name="TimeframeMainGroup_31">
                        <group name="Object_130">
                          <mesh
                            name="Sphere004Shape_100_0"
                            geometry={nodes.Sphere004Shape_100_0.geometry}
                            material={materials.Sphere004Shape}
                          />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
                <group name="Object_132" rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_133" position={[-60, 0, 0]}>
                    <group name="TimeframeMainGroup_30">
                      <group name="Object_135">
                        <mesh
                          name="Sphere003Shape_104_0"
                          geometry={nodes.Sphere003Shape_104_0.geometry}
                          material={materials.Sphere003Shape}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="Object_137"
                  position={[0.079, -30, 0.044]}
                  rotation={[-1.481, -0.024, -0.511]}
                  scale={[0.337, 0.337, 0.893]}
                >
                  <group name="TimeframeMainGroup_16">
                    <group name="Object_139">
                      <mesh
                        name="Cylinder033Shape_107_0"
                        geometry={nodes.Cylinder033Shape_107_0.geometry}
                        material={materials.Cylinder033Shape}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Object_141"
                  position={[0.079, -30, 0.044]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.32, 0.32, 1]}
                >
                  <group name="TimeframeMainGroup_17">
                    <group name="Object_143">
                      <mesh
                        name="Cylinder034Shape_110_0"
                        geometry={nodes.Cylinder034Shape_110_0.geometry}
                        material={materials.Cylinder034Shape}
                      />
                    </group>
                  </group>
                </group>
                <group name="Object_108" rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="TimeframeMainGroup_18">
                    <group name="Object_110">
                      <mesh
                        name="Sphere001Shape_84_0"
                        geometry={nodes.Sphere001Shape_84_0.geometry}
                        material={materials.Sphere001Shape}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/galaxy.glb");
