
import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Room(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/models/a_windy_day.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="sketchfabtimeframe">
            <group name="Object_2" scale={0}>
              <group name="frame_49">
                <points name="Object_4" geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_5" geometry={nodes.Object_5.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_6" geometry={nodes.Object_6.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_7" scale={0}>
              <group name="frame_48">
                <points name="Object_9" geometry={nodes.Object_9.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_10" geometry={nodes.Object_10.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_11" geometry={nodes.Object_11.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_12" scale={0}>
              <group name="frame_47">
                <points name="Object_14" geometry={nodes.Object_14.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_15" geometry={nodes.Object_15.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_16" geometry={nodes.Object_16.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_17" scale={0}>
              <group name="frame_46">
                <points name="Object_19" geometry={nodes.Object_19.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_20" geometry={nodes.Object_20.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_21" geometry={nodes.Object_21.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_22" scale={0}>
              <group name="frame_45">
                <points name="Object_24" geometry={nodes.Object_24.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_25" geometry={nodes.Object_25.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_26" geometry={nodes.Object_26.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_27" scale={0}>
              <group name="frame_44">
                <points name="Object_29" geometry={nodes.Object_29.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_30" geometry={nodes.Object_30.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_31" geometry={nodes.Object_31.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_32" scale={0}>
              <group name="frame_43">
                <points name="Object_34" geometry={nodes.Object_34.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_35" geometry={nodes.Object_35.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_36" geometry={nodes.Object_36.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_37" scale={0}>
              <group name="frame_42">
                <points name="Object_39" geometry={nodes.Object_39.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_40" geometry={nodes.Object_40.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_41" geometry={nodes.Object_41.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_42" scale={0}>
              <group name="frame_41">
                <points name="Object_44" geometry={nodes.Object_44.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_45" geometry={nodes.Object_45.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_46" geometry={nodes.Object_46.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_47" scale={0}>
              <group name="frame_40">
                <points name="Object_49" geometry={nodes.Object_49.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_50" geometry={nodes.Object_50.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_51" geometry={nodes.Object_51.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_52" scale={0}>
              <group name="frame_39">
                <points name="Object_54" geometry={nodes.Object_54.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_55" geometry={nodes.Object_55.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_56" geometry={nodes.Object_56.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_57" scale={0}>
              <group name="frame_38">
                <points name="Object_59" geometry={nodes.Object_59.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_60" geometry={nodes.Object_60.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_61" geometry={nodes.Object_61.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_62" scale={0}>
              <group name="frame_37">
                <points name="Object_64" geometry={nodes.Object_64.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_65" geometry={nodes.Object_65.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_66" geometry={nodes.Object_66.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_67" scale={0}>
              <group name="frame_36">
                <points name="Object_69" geometry={nodes.Object_69.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_70" geometry={nodes.Object_70.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_71" geometry={nodes.Object_71.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_72" scale={0}>
              <group name="frame_35">
                <points name="Object_74" geometry={nodes.Object_74.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_75" geometry={nodes.Object_75.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_76" geometry={nodes.Object_76.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_77" scale={0}>
              <group name="frame_34">
                <points name="Object_79" geometry={nodes.Object_79.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_80" geometry={nodes.Object_80.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_81" geometry={nodes.Object_81.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_82" scale={0}>
              <group name="frame_33">
                <points name="Object_84" geometry={nodes.Object_84.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_85" geometry={nodes.Object_85.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_86" geometry={nodes.Object_86.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_87" scale={0}>
              <group name="frame_32">
                <points name="Object_89" geometry={nodes.Object_89.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_90" geometry={nodes.Object_90.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_91" geometry={nodes.Object_91.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_92" scale={0}>
              <group name="frame_31">
                <points name="Object_94" geometry={nodes.Object_94.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_95" geometry={nodes.Object_95.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_96" geometry={nodes.Object_96.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_97" scale={0}>
              <group name="frame_30">
                <points name="Object_99" geometry={nodes.Object_99.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_100" geometry={nodes.Object_100.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_101" geometry={nodes.Object_101.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_102" scale={0}>
              <group name="frame_29">
                <points name="Object_104" geometry={nodes.Object_104.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_105" geometry={nodes.Object_105.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_106" geometry={nodes.Object_106.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_107" scale={0}>
              <group name="frame_28">
                <points name="Object_109" geometry={nodes.Object_109.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_110" geometry={nodes.Object_110.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_111" geometry={nodes.Object_111.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_112" scale={0}>
              <group name="frame_27">
                <points name="Object_114" geometry={nodes.Object_114.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_115" geometry={nodes.Object_115.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_116" geometry={nodes.Object_116.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_117" scale={0}>
              <group name="frame_26">
                <points name="Object_119" geometry={nodes.Object_119.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_120" geometry={nodes.Object_120.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_121" geometry={nodes.Object_121.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_122" scale={0}>
              <group name="frame_25">
                <points name="Object_124" geometry={nodes.Object_124.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_125" geometry={nodes.Object_125.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_126" geometry={nodes.Object_126.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_127" scale={0}>
              <group name="frame_24">
                <points name="Object_129" geometry={nodes.Object_129.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_130" geometry={nodes.Object_130.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_131" geometry={nodes.Object_131.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_132" scale={0}>
              <group name="frame_23">
                <points name="Object_134" geometry={nodes.Object_134.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_135" geometry={nodes.Object_135.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_136" geometry={nodes.Object_136.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_137" scale={0}>
              <group name="frame_22">
                <points name="Object_139" geometry={nodes.Object_139.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_140" geometry={nodes.Object_140.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_141" geometry={nodes.Object_141.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_142" scale={0}>
              <group name="frame_21">
                <points name="Object_144" geometry={nodes.Object_144.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_145" geometry={nodes.Object_145.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_146" geometry={nodes.Object_146.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_147" scale={0}>
              <group name="frame_20">
                <points name="Object_149" geometry={nodes.Object_149.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_150" geometry={nodes.Object_150.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_151" geometry={nodes.Object_151.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_152" scale={0}>
              <group name="frame_19">
                <points name="Object_154" geometry={nodes.Object_154.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_155" geometry={nodes.Object_155.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_156" geometry={nodes.Object_156.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_157" scale={0}>
              <group name="frame_18">
                <points name="Object_159" geometry={nodes.Object_159.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_160" geometry={nodes.Object_160.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_161" geometry={nodes.Object_161.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_162" scale={0}>
              <group name="frame_17">
                <points name="Object_164" geometry={nodes.Object_164.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_165" geometry={nodes.Object_165.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_166" geometry={nodes.Object_166.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_167" scale={0}>
              <group name="frame_16">
                <points name="Object_169" geometry={nodes.Object_169.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_170" geometry={nodes.Object_170.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_171" geometry={nodes.Object_171.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_172" scale={0}>
              <group name="frame_15">
                <points name="Object_174" geometry={nodes.Object_174.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_175" geometry={nodes.Object_175.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_176" geometry={nodes.Object_176.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_177" scale={0}>
              <group name="frame_14">
                <points name="Object_179" geometry={nodes.Object_179.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_180" geometry={nodes.Object_180.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_181" geometry={nodes.Object_181.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_182" scale={0}>
              <group name="frame_13">
                <points name="Object_184" geometry={nodes.Object_184.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_185" geometry={nodes.Object_185.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_186" geometry={nodes.Object_186.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_187" scale={0}>
              <group name="frame_12">
                <points name="Object_189" geometry={nodes.Object_189.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_190" geometry={nodes.Object_190.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_191" geometry={nodes.Object_191.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_192" scale={0}>
              <group name="frame_11">
                <points name="Object_194" geometry={nodes.Object_194.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_195" geometry={nodes.Object_195.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_196" geometry={nodes.Object_196.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_197" scale={0}>
              <group name="frame_10">
                <points name="Object_199" geometry={nodes.Object_199.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_200" geometry={nodes.Object_200.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_201" geometry={nodes.Object_201.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_202" scale={0}>
              <group name="frame_9">
                <points name="Object_204" geometry={nodes.Object_204.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_205" geometry={nodes.Object_205.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_206" geometry={nodes.Object_206.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_207" scale={0}>
              <group name="frame_8">
                <points name="Object_209" geometry={nodes.Object_209.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_210" geometry={nodes.Object_210.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_211" geometry={nodes.Object_211.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_212" scale={0}>
              <group name="frame_7">
                <points name="Object_214" geometry={nodes.Object_214.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_215" geometry={nodes.Object_215.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_216" geometry={nodes.Object_216.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_217" scale={0}>
              <group name="frame_6">
                <points name="Object_219" geometry={nodes.Object_219.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_220" geometry={nodes.Object_220.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_221" geometry={nodes.Object_221.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_222" scale={0}>
              <group name="frame_5">
                <points name="Object_224" geometry={nodes.Object_224.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_225" geometry={nodes.Object_225.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_226" geometry={nodes.Object_226.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_227" scale={0}>
              <group name="frame_4">
                <points name="Object_229" geometry={nodes.Object_229.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_230" geometry={nodes.Object_230.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_231" geometry={nodes.Object_231.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_232" scale={0}>
              <group name="frame_3">
                <points name="Object_234" geometry={nodes.Object_234.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_235" geometry={nodes.Object_235.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_236" geometry={nodes.Object_236.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_237" scale={0}>
              <group name="frame_2">
                <points name="Object_239" geometry={nodes.Object_239.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_240" geometry={nodes.Object_240.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_241" geometry={nodes.Object_241.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_242" scale={0}>
              <group name="frame_1">
                <points name="Object_244" geometry={nodes.Object_244.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_245" geometry={nodes.Object_245.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_246" geometry={nodes.Object_246.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
            <group name="Object_247">
              <group name="frame_0">
                <points name="Object_249" geometry={nodes.Object_249.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_250" geometry={nodes.Object_250.geometry} material={materials['Scene_-_Root']} />
                <points name="Object_251" geometry={nodes.Object_251.geometry} material={materials['Scene_-_Root']} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/a_windy_day.glb')
