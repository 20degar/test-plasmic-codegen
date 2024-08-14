// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dXjVQzgkmo1co7so3iCqXS
// Component: 0ryDYSCUNo3w

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import PageLayout from "../../PageLayout"; // plasmic-import: Ib_kB-8U0z5E/component
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import Em2023List from "../../Em2023List"; // plasmic-import: a6ccoAH09Ojr/component
import { AntdModal } from "@plasmicpkgs/antd5/skinny/registerModal";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: dXjVQzgkmo1co7so3iCqXS/projectcss
import sty from "./PlasmicCustomer.module.css"; // plasmic-import: 0ryDYSCUNo3w/css

createPlasmicElementProxy;

export type PlasmicCustomer__VariantMembers = {};
export type PlasmicCustomer__VariantsArgs = {};
type VariantPropType = keyof PlasmicCustomer__VariantsArgs;
export const PlasmicCustomer__VariantProps = new Array<VariantPropType>();

export type PlasmicCustomer__ArgsType = {};
type ArgPropType = keyof PlasmicCustomer__ArgsType;
export const PlasmicCustomer__ArgProps = new Array<ArgPropType>();

export type PlasmicCustomer__OverridesType = {
  root?: Flex__<"div">;
  pageLayout?: Flex__<typeof PageLayout>;
  h2?: Flex__<"h2">;
  em2023List?: Flex__<typeof Em2023List>;
  modal?: Flex__<typeof AntdModal>;
};

export interface DefaultCustomerProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCustomer__RenderFunc(props: {
  variants: PlasmicCustomer__VariantsArgs;
  args: PlasmicCustomer__ArgsType;
  overrides: PlasmicCustomer__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "modal.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    getCustomerDetails: usePlasmicDataOp(() => {
      return {
        sourceId: "9J16Yg9mtSGFbVhEaxctYn",
        opId: "4767d342-e961-411e-b657-3a663470c47d",
        userArgs: {
          keys: [$ctx.params.customerID]
        },
        cacheKey: `plasmic.$.4767d342-e961-411e-b657-3a663470c47d.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    getCustomerEm2023: usePlasmicDataOp(() => {
      return {
        sourceId: "9J16Yg9mtSGFbVhEaxctYn",
        opId: "21c70311-e561-4882-8592-39e425a8c1f2",
        userArgs: {
          query: [$ctx.params.customerID]
        },
        cacheKey: `plasmic.$.21c70311-e561-4882-8592-39e425a8c1f2.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    getCustomerProperties: usePlasmicDataOp(() => {
      return {
        sourceId: "9J16Yg9mtSGFbVhEaxctYn",
        opId: "3ca5af2b-91af-44f0-8c94-7dda4f04f6fb",
        userArgs: {
          query: [$ctx.params.customerID]
        },
        cacheKey: `plasmic.$.3ca5af2b-91af-44f0-8c94-7dda4f04f6fb.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
          >
            <DataCtxReader__>
              {$ctx => (
                <React.Fragment>
                  <section
                    className={classNames(projectcss.all, sty.section__nJtMx)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.columns___8PgGk
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__pez9Q
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__gkoM7
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return $queries.getCustomerDetails.data[0].id;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__pyAW
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return $queries.getCustomerDetails.data[0]
                                  .service_provider;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        </div>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column___1Jb8B
                        )}
                      >
                        <AntdButton
                          className={classNames(
                            "__wab_instance",
                            sty.button__loxF4
                          )}
                          onClick={async () => {
                            const $steps = {};

                            $steps["goToPage"] =
                              $queries.getCustomerDetails.data[0].gdrive_url !=
                              null
                                ? (() => {
                                    const actionArgs = {
                                      destination: (() => {
                                        try {
                                          return $queries.getCustomerDetails
                                            .data[0].gdrive_url;
                                        } catch (e) {
                                          if (
                                            e instanceof TypeError ||
                                            e?.plasmicType ===
                                              "PlasmicUndefinedDataError"
                                          ) {
                                            return undefined;
                                          }
                                          throw e;
                                        }
                                      })()
                                    };
                                    return (({ destination }) => {
                                      if (
                                        typeof destination === "string" &&
                                        destination.startsWith("#")
                                      ) {
                                        document
                                          .getElementById(destination.substr(1))
                                          .scrollIntoView({
                                            behavior: "smooth"
                                          });
                                      } else {
                                        __nextRouter?.push(destination);
                                      }
                                    })?.apply(null, [actionArgs]);
                                  })()
                                : undefined;
                            if (
                              $steps["goToPage"] != null &&
                              typeof $steps["goToPage"] === "object" &&
                              typeof $steps["goToPage"].then === "function"
                            ) {
                              $steps["goToPage"] = await $steps["goToPage"];
                            }
                          }}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__p6Mhs
                            )}
                          >
                            {"\u00d6ffnen in Google Drive"}
                          </div>
                        </AntdButton>
                        <AntdButton
                          className={classNames(
                            "__wab_instance",
                            sty.button__eIhGq
                          )}
                          onClick={async () => {
                            const $steps = {};

                            $steps["updateModalOpen"] = true
                              ? (() => {
                                  const actionArgs = {
                                    variable: {
                                      objRoot: $state,
                                      variablePath: ["modal", "open"]
                                    },
                                    operation: 0,
                                    value: true
                                  };
                                  return (({
                                    variable,
                                    value,
                                    startIndex,
                                    deleteCount
                                  }) => {
                                    if (!variable) {
                                      return;
                                    }
                                    const { objRoot, variablePath } = variable;

                                    $stateSet(objRoot, variablePath, value);
                                    return value;
                                  })?.apply(null, [actionArgs]);
                                })()
                              : undefined;
                            if (
                              $steps["updateModalOpen"] != null &&
                              typeof $steps["updateModalOpen"] === "object" &&
                              typeof $steps["updateModalOpen"].then ===
                                "function"
                            ) {
                              $steps["updateModalOpen"] = await $steps[
                                "updateModalOpen"
                              ];
                            }
                          }}
                          type={"default"}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__aiBpG
                            )}
                          >
                            {"Kunde l\u00f6schen"}
                          </div>
                        </AntdButton>
                      </div>
                    </div>
                    <section
                      className={classNames(
                        projectcss.all,
                        sty.section___8FPdk
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.columns__dFlaD
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__xEbLe
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___5Cpr3
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return (
                                    $queries.getCustomerDetails.data[0]
                                      .salutation +
                                    " " +
                                    $queries.getCustomerDetails.data[0]
                                      .first_name +
                                    " " +
                                    $queries.getCustomerDetails.data[0]
                                      .last_name
                                  );
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__ak4S4
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return $queries.getCustomerDetails.data[0]
                                    .email;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__b88Lk
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return $queries.getCustomerDetails.data[0]
                                    .phone;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </div>
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__gf67F
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__foFoa
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return (
                                    $queries.getCustomerDetails.data[0].street +
                                    " " +
                                    $queries.getCustomerDetails.data[0]
                                      .street_number
                                  );
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__n6C7A
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return (
                                    $queries.getCustomerDetails.data[0]
                                      .zip_code +
                                    " " +
                                    $queries.getCustomerDetails.data[0].city
                                  );
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </div>
                        </div>
                      </div>
                    </section>
                  </section>
                  <section
                    className={classNames(projectcss.all, sty.section__o0Kiq)}
                  >
                    <h2
                      data-plasmic-name={"h2"}
                      data-plasmic-override={overrides.h2}
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2
                      )}
                    >
                      {"Objekte"}
                    </h2>
                    {(_par =>
                      !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                      (() => {
                        try {
                          return $queries.getCustomerProperties.data;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return [];
                          }
                          throw e;
                        }
                      })()
                    ).map((__plasmic_item_0, __plasmic_idx_0) => {
                      const currentItem = __plasmic_item_0;
                      const currentIndex = __plasmic_idx_0;
                      return (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__fnAdY
                          )}
                          key={currentIndex}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__vhtBi
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return (
                                    "ID: " +
                                    currentItem.id +
                                    " " +
                                    currentItem.street +
                                    " " +
                                    currentItem.street_number
                                  );
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </div>
                          <Em2023List
                            data-plasmic-name={"em2023List"}
                            data-plasmic-override={overrides.em2023List}
                            className={classNames(
                              "__wab_instance",
                              sty.em2023List
                            )}
                            propertyId={(() => {
                              try {
                                return currentItem.id;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return undefined;
                                }
                                throw e;
                              }
                            })()}
                          />
                        </div>
                      );
                    })}
                  </section>
                  <AntdModal
                    data-plasmic-name={"modal"}
                    data-plasmic-override={overrides.modal}
                    className={classNames("__wab_instance", sty.modal)}
                    defaultStylesClassName={classNames(
                      projectcss.root_reset,
                      projectcss.plasmic_default_styles,
                      projectcss.plasmic_mixins,
                      projectcss.plasmic_tokens,
                      plasmic_antd_5_hostless_css.plasmic_tokens,
                      plasmic_plasmic_rich_components_css.plasmic_tokens
                    )}
                    modalScopeClassName={sty["modal__modal"]}
                    onOk={async () => {
                      const $steps = {};

                      $steps["airtableDeleteOne"] = true
                        ? (() => {
                            const actionArgs = {
                              dataOp: {
                                sourceId: "wXdafyUqhSwNQ1C5FEJn4s",
                                opId: "f46f4b05-5402-4bec-ab5c-33fd10a26951",
                                userArgs: {
                                  id: [$ctx.params.customerID]
                                },
                                cacheKey: null,
                                invalidatedKeys: ["plasmic_refresh_all"],
                                roleId: null
                              }
                            };
                            return (async ({ dataOp, continueOnError }) => {
                              try {
                                const response = await executePlasmicDataOp(
                                  dataOp,
                                  {
                                    userAuthToken:
                                      dataSourcesCtx?.userAuthToken,
                                    user: dataSourcesCtx?.user
                                  }
                                );
                                await plasmicInvalidate(dataOp.invalidatedKeys);
                                return response;
                              } catch (e) {
                                if (!continueOnError) {
                                  throw e;
                                }
                                return e;
                              }
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["airtableDeleteOne"] != null &&
                        typeof $steps["airtableDeleteOne"] === "object" &&
                        typeof $steps["airtableDeleteOne"].then === "function"
                      ) {
                        $steps["airtableDeleteOne"] = await $steps[
                          "airtableDeleteOne"
                        ];
                      }
                    }}
                    onOpenChange={generateStateOnChangeProp($state, [
                      "modal",
                      "open"
                    ])}
                    open={generateStateValueProp($state, ["modal", "open"])}
                    title={"Modal title"}
                    trigger={null}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__jTdf)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___6Fvsk
                        )}
                      >
                        {"Modal content"}
                      </div>
                    </div>
                  </AntdModal>
                </React.Fragment>
              )}
            </DataCtxReader__>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "pageLayout", "h2", "em2023List", "modal"],
  pageLayout: ["pageLayout", "h2", "em2023List", "modal"],
  h2: ["h2"],
  em2023List: ["em2023List"],
  modal: ["modal"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageLayout: typeof PageLayout;
  h2: "h2";
  em2023List: typeof Em2023List;
  modal: typeof AntdModal;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCustomer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCustomer__VariantsArgs;
    args?: PlasmicCustomer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCustomer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCustomer__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCustomer__ArgProps,
          internalVariantPropNames: PlasmicCustomer__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCustomer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCustomer";
  } else {
    func.displayName = `PlasmicCustomer.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <PlasmicPageGuard__
      minRole={"b32d3598-8054-47fb-a419-71f4c0711efa"}
      appId={"dXjVQzgkmo1co7so3iCqXS"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "dXjVQzgkmo1co7so3iCqXS"
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicCustomer = Object.assign(
  // Top-level PlasmicCustomer renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    h2: makeNodeComponent("h2"),
    em2023List: makeNodeComponent("em2023List"),
    modal: makeNodeComponent("modal"),

    // Metadata about props expected for PlasmicCustomer
    internalVariantProps: PlasmicCustomer__VariantProps,
    internalArgProps: PlasmicCustomer__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCustomer;
/* prettier-ignore-end */
