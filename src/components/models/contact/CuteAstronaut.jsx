/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 cute_astronaut.glb 
Author: haefu (https://sketchfab.com/haefu)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cute-astronaut-816bd786fe8b4559a009de6a95582003
Title: Cute Astronaut
*/

import React, { useEffect } from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export function CuteAstronaut(props) {
  const group = React.useRef();
  const { scene, animations } = useGLTF("/models/cute_astronaut.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions, names } = useAnimations(animations, group);

  console.log("names: ", names);

  useEffect(() => {
    actions[names[0]].play();
  }, [names[0]]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={20}
          // scale={0.642}
        >
          <group
            name="5db75e2292f94d039cdc7abc99f36946fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Astronaut"
                  position={[-120.11, 189.756, 5.198]}
                  rotation={[2.109, 1.4, -2.577]}
                  scale={[-25.732, -25.723, -31.878]}
                />
                <group
                  name="Armature_Astronaut"
                  position={[0, 0, 7.92]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <group
                      name="Object_8"
                      position={[-120.11, 189.756, 5.198]}
                      rotation={[-1.032, -1.4, 2.577]}
                      scale={[-25.732, 25.723, 31.878]}
                    />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.Astronaut}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <skinnedMesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={materials.visier}
                      skeleton={nodes.Object_10.skeleton}
                    />
                  </group>
                </group>
                <group name="Sun" rotation={[3.128, 0.773, -2.283]} scale={100}>
                  <group name="Object_65" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_66" />
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

useGLTF.preload("/models/cute_astronaut.glb");

export default CuteAstronaut;
