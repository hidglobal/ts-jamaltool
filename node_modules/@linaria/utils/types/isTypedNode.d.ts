import type { NodePath } from '@babel/traverse';
declare const isTypedNode: <T extends "AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression">(type: T) => (p: NodePath) => p is NodePath<Extract<import("@babel/types").AnyTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").ArgumentPlaceholder, {
    type: T;
}> | Extract<import("@babel/types").ArrayExpression, {
    type: T;
}> | Extract<import("@babel/types").ArrayPattern, {
    type: T;
}> | Extract<import("@babel/types").ArrayTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").ArrowFunctionExpression, {
    type: T;
}> | Extract<import("@babel/types").AssignmentExpression, {
    type: T;
}> | Extract<import("@babel/types").AssignmentPattern, {
    type: T;
}> | Extract<import("@babel/types").AwaitExpression, {
    type: T;
}> | Extract<import("@babel/types").BigIntLiteral, {
    type: T;
}> | Extract<import("@babel/types").BinaryExpression, {
    type: T;
}> | Extract<import("@babel/types").BindExpression, {
    type: T;
}> | Extract<import("@babel/types").BlockStatement, {
    type: T;
}> | Extract<import("@babel/types").BooleanLiteral, {
    type: T;
}> | Extract<import("@babel/types").BooleanLiteralTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").BooleanTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").BreakStatement, {
    type: T;
}> | Extract<import("@babel/types").CallExpression, {
    type: T;
}> | Extract<import("@babel/types").CatchClause, {
    type: T;
}> | Extract<import("@babel/types").ClassAccessorProperty, {
    type: T;
}> | Extract<import("@babel/types").ClassBody, {
    type: T;
}> | Extract<import("@babel/types").ClassDeclaration, {
    type: T;
}> | Extract<import("@babel/types").ClassExpression, {
    type: T;
}> | Extract<import("@babel/types").ClassImplements, {
    type: T;
}> | Extract<import("@babel/types").ClassMethod, {
    type: T;
}> | Extract<import("@babel/types").ClassPrivateMethod, {
    type: T;
}> | Extract<import("@babel/types").ClassPrivateProperty, {
    type: T;
}> | Extract<import("@babel/types").ClassProperty, {
    type: T;
}> | Extract<import("@babel/types").ConditionalExpression, {
    type: T;
}> | Extract<import("@babel/types").ContinueStatement, {
    type: T;
}> | Extract<import("@babel/types").DebuggerStatement, {
    type: T;
}> | Extract<import("@babel/types").DecimalLiteral, {
    type: T;
}> | Extract<import("@babel/types").DeclareClass, {
    type: T;
}> | Extract<import("@babel/types").DeclareExportAllDeclaration, {
    type: T;
}> | Extract<import("@babel/types").DeclareExportDeclaration, {
    type: T;
}> | Extract<import("@babel/types").DeclareFunction, {
    type: T;
}> | Extract<import("@babel/types").DeclareInterface, {
    type: T;
}> | Extract<import("@babel/types").DeclareModule, {
    type: T;
}> | Extract<import("@babel/types").DeclareModuleExports, {
    type: T;
}> | Extract<import("@babel/types").DeclareOpaqueType, {
    type: T;
}> | Extract<import("@babel/types").DeclareTypeAlias, {
    type: T;
}> | Extract<import("@babel/types").DeclareVariable, {
    type: T;
}> | Extract<import("@babel/types").DeclaredPredicate, {
    type: T;
}> | Extract<import("@babel/types").Decorator, {
    type: T;
}> | Extract<import("@babel/types").Directive, {
    type: T;
}> | Extract<import("@babel/types").DirectiveLiteral, {
    type: T;
}> | Extract<import("@babel/types").DoExpression, {
    type: T;
}> | Extract<import("@babel/types").DoWhileStatement, {
    type: T;
}> | Extract<import("@babel/types").EmptyStatement, {
    type: T;
}> | Extract<import("@babel/types").EmptyTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").EnumBooleanBody, {
    type: T;
}> | Extract<import("@babel/types").EnumBooleanMember, {
    type: T;
}> | Extract<import("@babel/types").EnumDeclaration, {
    type: T;
}> | Extract<import("@babel/types").EnumDefaultedMember, {
    type: T;
}> | Extract<import("@babel/types").EnumNumberBody, {
    type: T;
}> | Extract<import("@babel/types").EnumNumberMember, {
    type: T;
}> | Extract<import("@babel/types").EnumStringBody, {
    type: T;
}> | Extract<import("@babel/types").EnumStringMember, {
    type: T;
}> | Extract<import("@babel/types").EnumSymbolBody, {
    type: T;
}> | Extract<import("@babel/types").ExistsTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").ExportAllDeclaration, {
    type: T;
}> | Extract<import("@babel/types").ExportDefaultDeclaration, {
    type: T;
}> | Extract<import("@babel/types").ExportDefaultSpecifier, {
    type: T;
}> | Extract<import("@babel/types").ExportNamedDeclaration, {
    type: T;
}> | Extract<import("@babel/types").ExportNamespaceSpecifier, {
    type: T;
}> | Extract<import("@babel/types").ExportSpecifier, {
    type: T;
}> | Extract<import("@babel/types").ExpressionStatement, {
    type: T;
}> | Extract<import("@babel/types").File, {
    type: T;
}> | Extract<import("@babel/types").ForInStatement, {
    type: T;
}> | Extract<import("@babel/types").ForOfStatement, {
    type: T;
}> | Extract<import("@babel/types").ForStatement, {
    type: T;
}> | Extract<import("@babel/types").FunctionDeclaration, {
    type: T;
}> | Extract<import("@babel/types").FunctionExpression, {
    type: T;
}> | Extract<import("@babel/types").FunctionTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").FunctionTypeParam, {
    type: T;
}> | Extract<import("@babel/types").GenericTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").Identifier, {
    type: T;
}> | Extract<import("@babel/types").IfStatement, {
    type: T;
}> | Extract<import("@babel/types").Import, {
    type: T;
}> | Extract<import("@babel/types").ImportAttribute, {
    type: T;
}> | Extract<import("@babel/types").ImportDeclaration, {
    type: T;
}> | Extract<import("@babel/types").ImportDefaultSpecifier, {
    type: T;
}> | Extract<import("@babel/types").ImportNamespaceSpecifier, {
    type: T;
}> | Extract<import("@babel/types").ImportSpecifier, {
    type: T;
}> | Extract<import("@babel/types").IndexedAccessType, {
    type: T;
}> | Extract<import("@babel/types").InferredPredicate, {
    type: T;
}> | Extract<import("@babel/types").InterfaceDeclaration, {
    type: T;
}> | Extract<import("@babel/types").InterfaceExtends, {
    type: T;
}> | Extract<import("@babel/types").InterfaceTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").InterpreterDirective, {
    type: T;
}> | Extract<import("@babel/types").IntersectionTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").JSXAttribute, {
    type: T;
}> | Extract<import("@babel/types").JSXClosingElement, {
    type: T;
}> | Extract<import("@babel/types").JSXClosingFragment, {
    type: T;
}> | Extract<import("@babel/types").JSXElement, {
    type: T;
}> | Extract<import("@babel/types").JSXEmptyExpression, {
    type: T;
}> | Extract<import("@babel/types").JSXExpressionContainer, {
    type: T;
}> | Extract<import("@babel/types").JSXFragment, {
    type: T;
}> | Extract<import("@babel/types").JSXIdentifier, {
    type: T;
}> | Extract<import("@babel/types").JSXMemberExpression, {
    type: T;
}> | Extract<import("@babel/types").JSXNamespacedName, {
    type: T;
}> | Extract<import("@babel/types").JSXOpeningElement, {
    type: T;
}> | Extract<import("@babel/types").JSXOpeningFragment, {
    type: T;
}> | Extract<import("@babel/types").JSXSpreadAttribute, {
    type: T;
}> | Extract<import("@babel/types").JSXSpreadChild, {
    type: T;
}> | Extract<import("@babel/types").JSXText, {
    type: T;
}> | Extract<import("@babel/types").LabeledStatement, {
    type: T;
}> | Extract<import("@babel/types").LogicalExpression, {
    type: T;
}> | Extract<import("@babel/types").MemberExpression, {
    type: T;
}> | Extract<import("@babel/types").MetaProperty, {
    type: T;
}> | Extract<import("@babel/types").MixedTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").ModuleExpression, {
    type: T;
}> | Extract<import("@babel/types").NewExpression, {
    type: T;
}> | Extract<import("@babel/types").Noop, {
    type: T;
}> | Extract<import("@babel/types").NullLiteral, {
    type: T;
}> | Extract<import("@babel/types").NullLiteralTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").NullableTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").NumberLiteral, {
    type: T;
}> | Extract<import("@babel/types").NumberLiteralTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").NumberTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").NumericLiteral, {
    type: T;
}> | Extract<import("@babel/types").ObjectExpression, {
    type: T;
}> | Extract<import("@babel/types").ObjectMethod, {
    type: T;
}> | Extract<import("@babel/types").ObjectPattern, {
    type: T;
}> | Extract<import("@babel/types").ObjectProperty, {
    type: T;
}> | Extract<import("@babel/types").ObjectTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").ObjectTypeCallProperty, {
    type: T;
}> | Extract<import("@babel/types").ObjectTypeIndexer, {
    type: T;
}> | Extract<import("@babel/types").ObjectTypeInternalSlot, {
    type: T;
}> | Extract<import("@babel/types").ObjectTypeProperty, {
    type: T;
}> | Extract<import("@babel/types").ObjectTypeSpreadProperty, {
    type: T;
}> | Extract<import("@babel/types").OpaqueType, {
    type: T;
}> | Extract<import("@babel/types").OptionalCallExpression, {
    type: T;
}> | Extract<import("@babel/types").OptionalIndexedAccessType, {
    type: T;
}> | Extract<import("@babel/types").OptionalMemberExpression, {
    type: T;
}> | Extract<import("@babel/types").ParenthesizedExpression, {
    type: T;
}> | Extract<import("@babel/types").PipelineBareFunction, {
    type: T;
}> | Extract<import("@babel/types").PipelinePrimaryTopicReference, {
    type: T;
}> | Extract<import("@babel/types").PipelineTopicExpression, {
    type: T;
}> | Extract<import("@babel/types").Placeholder, {
    type: T;
}> | Extract<import("@babel/types").PrivateName, {
    type: T;
}> | Extract<import("@babel/types").Program, {
    type: T;
}> | Extract<import("@babel/types").QualifiedTypeIdentifier, {
    type: T;
}> | Extract<import("@babel/types").RecordExpression, {
    type: T;
}> | Extract<import("@babel/types").RegExpLiteral, {
    type: T;
}> | Extract<import("@babel/types").RegexLiteral, {
    type: T;
}> | Extract<import("@babel/types").RestElement, {
    type: T;
}> | Extract<import("@babel/types").RestProperty, {
    type: T;
}> | Extract<import("@babel/types").ReturnStatement, {
    type: T;
}> | Extract<import("@babel/types").SequenceExpression, {
    type: T;
}> | Extract<import("@babel/types").SpreadElement, {
    type: T;
}> | Extract<import("@babel/types").SpreadProperty, {
    type: T;
}> | Extract<import("@babel/types").StaticBlock, {
    type: T;
}> | Extract<import("@babel/types").StringLiteral, {
    type: T;
}> | Extract<import("@babel/types").StringLiteralTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").StringTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").Super, {
    type: T;
}> | Extract<import("@babel/types").SwitchCase, {
    type: T;
}> | Extract<import("@babel/types").SwitchStatement, {
    type: T;
}> | Extract<import("@babel/types").SymbolTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").TSAnyKeyword, {
    type: T;
}> | Extract<import("@babel/types").TSArrayType, {
    type: T;
}> | Extract<import("@babel/types").TSAsExpression, {
    type: T;
}> | Extract<import("@babel/types").TSBigIntKeyword, {
    type: T;
}> | Extract<import("@babel/types").TSBooleanKeyword, {
    type: T;
}> | Extract<import("@babel/types").TSCallSignatureDeclaration, {
    type: T;
}> | Extract<import("@babel/types").TSConditionalType, {
    type: T;
}> | Extract<import("@babel/types").TSConstructSignatureDeclaration, {
    type: T;
}> | Extract<import("@babel/types").TSConstructorType, {
    type: T;
}> | Extract<import("@babel/types").TSDeclareFunction, {
    type: T;
}> | Extract<import("@babel/types").TSDeclareMethod, {
    type: T;
}> | Extract<import("@babel/types").TSEnumDeclaration, {
    type: T;
}> | Extract<import("@babel/types").TSEnumMember, {
    type: T;
}> | Extract<import("@babel/types").TSExportAssignment, {
    type: T;
}> | Extract<import("@babel/types").TSExpressionWithTypeArguments, {
    type: T;
}> | Extract<import("@babel/types").TSExternalModuleReference, {
    type: T;
}> | Extract<import("@babel/types").TSFunctionType, {
    type: T;
}> | Extract<import("@babel/types").TSImportEqualsDeclaration, {
    type: T;
}> | Extract<import("@babel/types").TSImportType, {
    type: T;
}> | Extract<import("@babel/types").TSIndexSignature, {
    type: T;
}> | Extract<import("@babel/types").TSIndexedAccessType, {
    type: T;
}> | Extract<import("@babel/types").TSInferType, {
    type: T;
}> | Extract<import("@babel/types").TSInstantiationExpression, {
    type: T;
}> | Extract<import("@babel/types").TSInterfaceBody, {
    type: T;
}> | Extract<import("@babel/types").TSInterfaceDeclaration, {
    type: T;
}> | Extract<import("@babel/types").TSIntersectionType, {
    type: T;
}> | Extract<import("@babel/types").TSIntrinsicKeyword, {
    type: T;
}> | Extract<import("@babel/types").TSLiteralType, {
    type: T;
}> | Extract<import("@babel/types").TSMappedType, {
    type: T;
}> | Extract<import("@babel/types").TSMethodSignature, {
    type: T;
}> | Extract<import("@babel/types").TSModuleBlock, {
    type: T;
}> | Extract<import("@babel/types").TSModuleDeclaration, {
    type: T;
}> | Extract<import("@babel/types").TSNamedTupleMember, {
    type: T;
}> | Extract<import("@babel/types").TSNamespaceExportDeclaration, {
    type: T;
}> | Extract<import("@babel/types").TSNeverKeyword, {
    type: T;
}> | Extract<import("@babel/types").TSNonNullExpression, {
    type: T;
}> | Extract<import("@babel/types").TSNullKeyword, {
    type: T;
}> | Extract<import("@babel/types").TSNumberKeyword, {
    type: T;
}> | Extract<import("@babel/types").TSObjectKeyword, {
    type: T;
}> | Extract<import("@babel/types").TSOptionalType, {
    type: T;
}> | Extract<import("@babel/types").TSParameterProperty, {
    type: T;
}> | Extract<import("@babel/types").TSParenthesizedType, {
    type: T;
}> | Extract<import("@babel/types").TSPropertySignature, {
    type: T;
}> | Extract<import("@babel/types").TSQualifiedName, {
    type: T;
}> | Extract<import("@babel/types").TSRestType, {
    type: T;
}> | Extract<import("@babel/types").TSSatisfiesExpression, {
    type: T;
}> | Extract<import("@babel/types").TSStringKeyword, {
    type: T;
}> | Extract<import("@babel/types").TSSymbolKeyword, {
    type: T;
}> | Extract<import("@babel/types").TSThisType, {
    type: T;
}> | Extract<import("@babel/types").TSTupleType, {
    type: T;
}> | Extract<import("@babel/types").TSTypeAliasDeclaration, {
    type: T;
}> | Extract<import("@babel/types").TSTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").TSTypeAssertion, {
    type: T;
}> | Extract<import("@babel/types").TSTypeLiteral, {
    type: T;
}> | Extract<import("@babel/types").TSTypeOperator, {
    type: T;
}> | Extract<import("@babel/types").TSTypeParameter, {
    type: T;
}> | Extract<import("@babel/types").TSTypeParameterDeclaration, {
    type: T;
}> | Extract<import("@babel/types").TSTypeParameterInstantiation, {
    type: T;
}> | Extract<import("@babel/types").TSTypePredicate, {
    type: T;
}> | Extract<import("@babel/types").TSTypeQuery, {
    type: T;
}> | Extract<import("@babel/types").TSTypeReference, {
    type: T;
}> | Extract<import("@babel/types").TSUndefinedKeyword, {
    type: T;
}> | Extract<import("@babel/types").TSUnionType, {
    type: T;
}> | Extract<import("@babel/types").TSUnknownKeyword, {
    type: T;
}> | Extract<import("@babel/types").TSVoidKeyword, {
    type: T;
}> | Extract<import("@babel/types").TaggedTemplateExpression, {
    type: T;
}> | Extract<import("@babel/types").TemplateElement, {
    type: T;
}> | Extract<import("@babel/types").TemplateLiteral, {
    type: T;
}> | Extract<import("@babel/types").ThisExpression, {
    type: T;
}> | Extract<import("@babel/types").ThisTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").ThrowStatement, {
    type: T;
}> | Extract<import("@babel/types").TopicReference, {
    type: T;
}> | Extract<import("@babel/types").TryStatement, {
    type: T;
}> | Extract<import("@babel/types").TupleExpression, {
    type: T;
}> | Extract<import("@babel/types").TupleTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").TypeAlias, {
    type: T;
}> | Extract<import("@babel/types").TypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").TypeCastExpression, {
    type: T;
}> | Extract<import("@babel/types").TypeParameter, {
    type: T;
}> | Extract<import("@babel/types").TypeParameterDeclaration, {
    type: T;
}> | Extract<import("@babel/types").TypeParameterInstantiation, {
    type: T;
}> | Extract<import("@babel/types").TypeofTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").UnaryExpression, {
    type: T;
}> | Extract<import("@babel/types").UnionTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").UpdateExpression, {
    type: T;
}> | Extract<import("@babel/types").V8IntrinsicIdentifier, {
    type: T;
}> | Extract<import("@babel/types").VariableDeclaration, {
    type: T;
}> | Extract<import("@babel/types").VariableDeclarator, {
    type: T;
}> | Extract<import("@babel/types").Variance, {
    type: T;
}> | Extract<import("@babel/types").VoidTypeAnnotation, {
    type: T;
}> | Extract<import("@babel/types").WhileStatement, {
    type: T;
}> | Extract<import("@babel/types").WithStatement, {
    type: T;
}> | Extract<import("@babel/types").YieldExpression, {
    type: T;
}>>;
export default isTypedNode;
